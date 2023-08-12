export function buildQrApiUri(baseUri: any, params: any): string {
  return [
    `${baseUri}/${params.bankId}-${params.accountNo}-${params.qrTemplate}.png?`,
    `amount=${params.amount}&addInfo=${params.des}&accountName=${params.accountName}`,
  ].join("");
}
