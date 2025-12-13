/**
 * Facebook Pixel Configuration
 *
 * ⚠️ DO NOT commit this file to git (already in .gitignore)
 */

window.FB_PIXEL_CONFIG = {
  // Facebook Pixel ID (cần cho client-side Pixel init)
  pixelId: "1826377334661720",

  // Cloudflare Worker URL for Conversions API
  capiEndpoint: "https://moinam.lumibeauty.studio/api/capi",

  // testEventCode: Optional - chỉ thêm khi test trong Meta Events Manager
  // testEventCode: "TEST12345", // Uncomment và thêm code khi cần test

  // pixel_id trong CAPI: Không gửi - Worker sẽ dùng env.FB_PIXEL_ID
  // access_token trong CAPI: Không gửi - Worker sẽ dùng env.FB_ACCESS_TOKEN

  // Enable debug mode (logs events to console)
  debug: false,

  // Disable tracking (set to true khi test để không gửi events lên Facebook)
  disableTracking: false,
};
