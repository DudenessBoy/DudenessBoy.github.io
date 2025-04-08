// Assumes 'version' is defined before this script is loaded

const defaultBaseUrl = `https://github.com/DudenessBoy/JSONly/releases/download/v${version}/`;
const sourceUrl = "https://github.com/DudenessBoy/JSONly/archive/refs/tags/";

// Define file links and optionally override the base URL
const fileMap = {
  linuxLink: { file: "jsonly_VERSION-x86_64.AppImage" },
  debLink: { file: "jsonly_VERSION_amd64.deb" },
  windowsInstallerLink: { file: "jsonly_VERSION-x86_64-installer.exe" },
  windowsStandaloneLink: { file: "jsonly_VERSION-x86_64-standalone.exe" },
  macInstallerLink: { file: "jsonly_VERSION.dmg" },
  macStandaloneLink: { file: "jsonly_VERSION-mac-standalone.zip" },

  // Source code links with a different base URL
  sourceZipLink: {
    file: "vVERSION.zip",
    base: sourceUrl
  },
  sourceTarGzLink: {
    file: "vVERSION.tar.gz",
    base: sourceUrl
  },
  githubRelease: {
    file: "vVERSION",
    base: "https://github.com/DudenessBoy/JSONly/releases/tag/"
  },
  sourceforgeRelease: {
    file: "vVERSION",
    base: "https://sourceforge.net/projects/jsonly/files/"
  }
};

function getFileName(template) {
  return template.replace("VERSION", version);
}

document.addEventListener("DOMContentLoaded", () => {
  for (const [id, data] of Object.entries(fileMap)) {
    const el = document.getElementById(id);
    if (!el) continue;

    const base = data.base || defaultBaseUrl;
    const fileName = getFileName(data.file);
    el.href = `${base}${fileName}`;
  }
});
