/**
 * Returns the value from the first Promise that resolves.
 *
 * @param {Promise} chinaDownload - Promise representing a download from China.
 * @param {Promise} USDownload - Promise representing a download from the US.
 * @returns {Promise} - Promise that resolves with the value of the first resolved Promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
