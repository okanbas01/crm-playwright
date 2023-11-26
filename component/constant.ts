import { Page } from '@playwright/test';

export async function clickAndWait(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page: Page,
  locator: string,
  timeout: number,
): Promise<void> {
  await page.locator(locator).click();
  await page.waitForTimeout(timeout);
}

export async function fillAndWait(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page: any,
  locator: string,
  text: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timeout: number,
): Promise<void> {
  await page.locator(locator).fill(text);
  await page.waitForTimeout(1000);
}
export async function compareAndLogResult(
  valueA,
  valueB,
  valueAHasMinus,
  valueAHasPlus,
  valueBHasMinus,
  valueBHasPlus,
  successMessage,
  failureMessage,
) {
  // Eğer valueA veya valueB null ise, karşılaştırma yapılamayacağını belirten bir hata mesajı loglanır ve fonksiyon sonlandırılır.
  if (valueA === null || valueB === null) {
    console.error('Değerler null olduğu için karşılaştırma yapılamıyor.');
    return;
  }
  // Değerleri düzenlenmiş hale getirir: Kesilen boşluklar çıkarılır ve gereksiz semboller (örneğin $ ve virgül) çıkarılır.
  const formattedValueA = valueA.trim().replace('$', '').replace(',', '');
  const formattedValueB = valueB.trim().replace('$', '').replace(',', '');
  // Değerleri sayısal hale dönüştürür.
  const numericValueA = parseFloat(formattedValueA.replace(/[^\d.-]/g, ''));
  const numericValueB = parseFloat(formattedValueB.replace(/[^\d.-]/g, ''));
  // Karşılaştırma işlemi gerçekleştirilir. Belli koşullar sağlanıyorsa başarılı bir mesaj loglanır, aksi takdirde hata mesajı loglanır.
  if (
    (valueAHasPlus &&
      valueBHasMinus &&
      Math.abs(numericValueA) === Math.abs(numericValueB)) ||
    (valueAHasMinus &&
      valueBHasPlus &&
      Math.abs(numericValueA) === Math.abs(numericValueB))
  ) {
    console.log(valueAHasPlus);
    console.log(valueBHasMinus);
    console.log(valueAHasMinus);
    console.log(valueBHasPlus);
    console.log(numericValueA);
    console.log(numericValueB);
    console.log(successMessage);
  } else {
    console.error(failureMessage);
  }
}
