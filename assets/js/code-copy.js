(function () {
  const copyIcon = document.getElementById("code-copy").innerHTML;
  const copyIconDone = document.getElementById("code-copy-done").innerHTML;

  /**
   * code inspired by https://digitaldrummerj.me/hugo-add-copy-code-snippet-button/
   * and https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo
   */

  function createCopyButton(highlightDiv) {
    const button = document.createElement("button");
    button.className = "right-1 top-1 absolute";
    button.type = "button";
    button.innerHTML = copyIcon;
    button.addEventListener("click", () => copyCodeToClipboard(button, highlightDiv));
    highlightDiv.insertBefore(button, highlightDiv.firstChild);
  }

  document.querySelectorAll(".highlight").forEach((highlightDiv) => createCopyButton(highlightDiv));

  async function copyCodeToClipboard(button, highlightDiv) {
    let codeToCopy = highlightDiv.querySelector("code").textContent;
    if (highlightDiv.querySelector("table")) { // code with line number
      codeToCopy = highlightDiv.querySelector("td:last-child code").textContent;
    }
    let permissionGranted = true;
    try {
      var result = await navigator.permissions.query({ name: "clipboard-write" });
      if (result.state != "granted" && result.state != "prompt") {
        permissionGranted = false;
      }
    } catch (_) {
      // The clipboard-write permission name is not supported in Firefox, only Chromium browsers.
      // default to true in case of error for firefox
    }

    try {
      if (permissionGranted) {
        await navigator.clipboard.writeText(codeToCopy);
      } else {
        copyCodeBlockExecCommand(codeToCopy, highlightDiv);
      }
    } catch (_) {
      copyCodeBlockExecCommand(codeToCopy, highlightDiv);
    } finally {
      /* Chrome doesn't seem to blur automatically,
         leaving the button in a focused state. */
      button.blur();
      button.innerHTML = copyIconDone;
      setTimeout(function () {
        button.innerHTML = copyIcon;
      }, 2000);
    }
  }

  function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
    const textArea = document.createElement("textArea");
    textArea.contentEditable = "true";
    textArea.readOnly = "false";
    textArea.className = "copyable-text-area";
    textArea.value = codeToCopy;
    highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
    const range = document.createRange();
    range.selectNodeContents(textArea);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    textArea.setSelectionRange(0, 999999);
    document.execCommand("copy");
    highlightDiv.removeChild(textArea);
  }
})();
