import { PUBLIC_API_SERVER } from '$env/static/public';
import Empty from './Empty.svelte';

const api_server_url = PUBLIC_API_SERVER + '/employee';

class ViewSDKClient {
	constructor() {
		this.readyPromise = new Promise((resolve) => {
			if (window.AdobeDC) {
				resolve('Adobe DC View SDK is ready!');
			} else {
				document.addEventListener('adobe_dc_view_sdk.ready', () => {
					resolve('Adobe DC View SDK is ready!');
				});
			}
		});

		this.adobeDCView = undefined;
	}

	ready() {
		return this.readyPromise;
	}

	createView(divId = 'pdf-container') {
		const config = {
			clientId: '9fe904f02792442abb9e851e9fd77e3d',
			divId: divId
		};
		this.adobeDCView = new window.AdobeDC.View(config);
	}

	async previewFile(
		viewerConfig = {
			defaultViewMode: 'FIT_WIDTH',
			showAnnotationTools: false,
			showDownloadPDF: false,
			showPrintPDF: false
		}
	) {
		const buffer = await fetch(`${api_server_url}`).then((res) => res.json());
		const blob = new Blob([new Int8Array(buffer.data)], { type: 'application/pdf' });
		const url = URL.createObjectURL(blob);

		const previewFilePromise = this.adobeDCView.previewFile(
			{
				content: { location: { url: url } },
				metaData: {
					fileName: 'example.pdf'
				}
			},
			viewerConfig
		);

		return previewFilePromise;
	}

	registerSaveApiHandler() {
		this.adobeDCView.registerCallback(
			window.AdobeDC.View.Enum.CallbackType.SAVE_API,
			this.saveApiHandler,
			{}
		);
	}

	/**
	 * Save API handler
	 * @param {Object} metaData
	 * @param {Int8Array} content
	 * @returns {Promise<Object>}
	 */
	saveApiHandler(metaData, content) {
		return new Promise((resolve) => {
			const blob = new Blob([content], { type: 'application/pdf' });
			const formData = new FormData();
			formData.append('pdf-file', blob, 'example.pdf');

			fetch(`${api_server_url}/save`, {
				method: 'POST',
				body: formData
			})
				.then((res) => res.json())
				.then(() => {
					const container = document.getElementById('pdf-container');
					if (container) {
						container.innerHTML = '';
						new Empty({ target: container });
					}

					const response = {
						code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
						data: {
							metaData: Object.assign(metaData, { updatedAt: new Date().getTime() })
						}
					};
					resolve(response);
				});
		});
	}
}

export default ViewSDKClient;
