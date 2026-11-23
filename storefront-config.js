/**
 * LedgerClean Pro (`账清`) — Storefront Checkout & Branding Configuration
 * Update these URLs manually or via:
 *   powershell -ExecutionPolicy Bypass -File .\ops\ship_all.ps1 -Mode DeployStorefront -MianbaoduoUrl "https://mbd.pub/o/bread/..." -GumroadUrl "https://..."
 */
window.LEDGERCLEAN_STOREFRONT_CONFIG = {
  productVersion: "1.0.0",
  // CN Domestic Checkout Links (面包多 Mianbaoduo / 爱发电 Afdian — WeChat Pay & Alipay)
  mianbaoduoSoloUrl: "https://www.goofish.com/item?id=1102543877537",
  mianbaoduoStudioUrl: "https://www.goofish.com/item?id=1103577856519",
  // Global Checkout Links (Gumroad / Ko-fi — Card, Apple Pay, PayPal)
  gumroadSoloUrl: "",
  gumroadTeamUrl: "",
  kofiUrl: "",
  // Public Repo / Support (optional)
  githubRepoUrl: "https://github.com/2848823170/ledgerclean-pro"
};
