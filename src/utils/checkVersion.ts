import semver from "semver";

export function checkVersion(version: string) {
  const semVersion = semver.coerce(version);
  return semver.compare(semVersion!, "2.0.0") >= 0;
}
