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
    try {
      var result = await navigator.permissions.query({ name: "clipboard-write" });
      if (result.state == "granted" || result.state == "prompt") {
        await navigator.clipboard.writeText(codeToCopy);
      }
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
})();
