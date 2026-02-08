// OpenNext configuration for Cloudflare Pages (without R2 dependency)
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
	// Use default cache for Pages deployment (no R2 dependency)
	// incrementalCache: r2IncrementalCache, // Disabled for Pages
});
