/**
 * Latest publicly-distributed Track IQ Android build.
 *
 * The APK itself lives in `public/downloads/` (served as a plain static
 * file by Next.js — no route handler needed). GitHub Releases on the
 * app's own source repo (private, for source-control reasons) aren't an
 * option for public distribution: a private repo's release assets 404 for
 * anyone without collaborator access, confirmed directly against
 * github.com. This site's own public domain is the actual distribution
 * point instead, and it's also the more trustworthy-looking download
 * source for an APK a stranger is about to sideload — a company domain,
 * not a GitHub URL under a personal username.
 *
 * Update this object (and drop the new file into public/downloads/) on
 * every release — traq-iq-repo's scripts/release.sh does both
 * automatically. iOS isn't listed as a download target: it isn't
 * released yet (see that repo's CLAUDE.md — the APNs key still needs
 * uploading in Firebase Console before iOS push even works, on top of no
 * iOS build having been produced at all).
 */
export const androidRelease = {
  version: "1.0.0",
  apkFileName: "traq-iq-v1.0.0-arm64-v8a.apk",
  apkPath: "/downloads/traq-iq-v1.0.0-arm64-v8a.apk",
  sizeLabel: "37.7 MB",
  releaseDate: "2026-09-20",
  /** arm64-v8a only — covers virtually all Android devices sold since ~2017. */
  abi: "arm64-v8a",
  // Confirmed via `aapt dump badging` on the actual built APK, not assumed
  // from flutter_launcher_icons' unrelated min_sdk_android:21 config (that
  // only governs icon generation) — the app's real Flutter-default minSdk
  // for this Flutter version is 24.
  minAndroidVersion: "Android 7.0+",
};
