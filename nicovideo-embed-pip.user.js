// ==UserScript==
// @name        nicovideo-embed-pip
// @description Add a button to start Picture-in-Picture in the embedded Niconico video player.
// @description:ja ニコニコ動画の埋め込みプレイヤーにPicture-in-Pictureを開始するボタンを追加します。
// @version     1.0.0
// @author      KOTO28
// @namespace   https://github.com/KOTO28
// @match       *://embed.nicovideo.jp/watch/*
// @grant       none
// @homepageURL https://github.com/KOTO28/nicovideo-embed-pip/
// @downloadURL https://raw.githubusercontent.com/KOTO28/nicovideo-embed-pip/main/nicovideo-embed-pip.user.js
// ==/UserScript==

(function () {
	"use strict";

	function togglePictureInPicture(video) {
		video.removeAttribute("disablePictureInPicture");
		if (document.pictureInPictureElement) {
			document.exitPictureInPicture();
		} else if (document.pictureInPictureEnabled) {
			video.requestPictureInPicture();
		}
	}

	const pip_svgBase64 =
		"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTYwLTE2MHEtMzMgMC01Ni41LTIzLjVUODAtMjQwdi00ODBxMC0zMyAyMy41LTU2LjVUMTYwLTgwMGg2NDBxMzMgMCA1Ni41IDIzLjVUODgwLTcyMHY0ODBxMCAzMy0yMy41IDU2LjVUODAwLTE2MEgxNjBabTAtODBoNjQwdi00ODBIMTYwdjQ4MFptMCAwdi00ODAgNDgwWm0yODAtMjAwaDMyMHYtMjQwSDQ0MHYyNDBabTgwLTgwdi04MGgxNjB2ODBINTIwWiIvPjwvc3ZnPg==";

	const button = document.createElement("button");
	button.classList.add("f1lo5ua1");
	const img = document.createElement("img");
	img.src = `data:image/svg+xml;base64,${pip_svgBase64}`;
	button.appendChild(img);
	button.addEventListener("click", function (e) {
		const video = document.querySelector("video");
		togglePictureInPicture(video);
	});

	document.querySelector(".fhlq6hd").children[2].appendChild(button);
})();
