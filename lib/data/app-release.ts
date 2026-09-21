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
 * Update this object (and drop the new file into public/downloads/, and
 * delete the old file) on every release — MANUAL for now: the
 * Traq-IQ_flutter repo's scripts/release.sh builds/tags/verifies and
 * creates the GitHub Release, but does not yet push here too. (Would be
 * worth wiring up given INCIDENT 2026-09-21 below — every extra manual
 * step is one more chance to ship the previous version's file under a
 * new version number, or vice versa.) iOS isn't listed as a download
 * target: it isn't released yet (see that repo's CLAUDE.md — the APNs
 * key still needs uploading in Firebase Console before iOS push even
 * works, on top of no iOS build having been produced at all).
 *
 * INCIDENT 2026-09-21: v1.0.0's APK was built and published here (and as
 * a GitHub Release) without --dart-define-from-file, so it launched
 * straight into main.dart's "Build misconfigured" screen — confirmed via
 * a real user's screenshot after downloading it from this exact page.
 * v1.0.1 is the fix (same commit otherwise); scripts/release.sh now
 * hard-fails before/after building if the required env values are
 * missing, so this class of bug can't ship silently again. v1.0.0's own
 * GitHub Release was left in place for history but its download button
 * here was fully replaced, never left pointing at both.
 */
export const androidRelease = {
  version: "1.0.1",
  apkFileName: "traq-iq-v1.0.1-arm64-v8a.apk",
  apkPath: "/downloads/traq-iq-v1.0.1-arm64-v8a.apk",
  sizeLabel: "42 MB",
  releaseDate: "2026-09-21",
  /** arm64-v8a only — covers virtually all Android devices sold since ~2017. */
  abi: "arm64-v8a",
  // Confirmed via `aapt dump badging` on the actual built APK, not assumed
  // from flutter_launcher_icons' unrelated min_sdk_android:21 config (that
  // only governs icon generation) — the app's real Flutter-default minSdk
  // for this Flutter version is 24.
  minAndroidVersion: "Android 7.0+",
};
