const answer = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
];

let vHints = null;
let hHints = null;

let isWin = false;

function checkWin() {
  console.log("check win ");

  const boardElem = document.getElementById("paintboard");

  let guessArray = [];

  for (let rowElem of boardElem.childNodes) {
    let arr = [];
    for (let gridElem of rowElem.childNodes) {
      if (gridElem.classList.contains("fill")) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    guessArray.push(arr);
  }
  console.log(JSON.stringify(guessArray));

  let isCorrect = true;
  for (let row = 0; row < answer.length; row++) {
    for (let col = 0; col < answer[0].length; col++) {
      if (answer[row][col] !== guessArray[row][col]) {
        isCorrect = false;
        continue;
      }
    }
    if (!isCorrect) {
      continue;
    }
  }
  return isCorrect;
}

/**
 * ペイントグリッドのクリックイベント
 */
function onClickPaintGrid(event) {
  if (event.shiftKey && !event.currentTarget.classList.contains("fill")) {
    if (event.currentTarget.classList.contains("cross")) {
      event.currentTarget.classList.remove("cross");
    } else {
      event.currentTarget.classList.add("cross");
    }
    return;
  }

  if (event.currentTarget.classList.contains("fill")) {
    event.currentTarget.classList.remove("fill");
  } else {
    event.currentTarget.classList.remove("cross");
    event.currentTarget.classList.add("fill");
  }

  if (checkWin()) {
    console.log("win");

    document.getElementById("win-panel").classList.remove("hidden");
    document.getElementById("board").classList.add("win");
  } else {
    document.getElementById("win-panel").classList.add("hidden");
    document.getElementById("board").classList.remove("win");
  }
}

/**
 * ヒントグリッドのクリックイベント
 */
function onClickHintGrid(event) {
  if (event.currentTarget.classList.contains("cross")) {
    event.currentTarget.classList.remove("cross");
  } else {
    event.currentTarget.classList.add("cross");
  }
}

/**
 * ヒント配列作成
 */
function createHintList() {
  // 横ヒント作成
  const _hHints = [];
  for (let i = 0; i < 25; i++) {
    _hHints.push([]);
  }

  for (let row = 0; row < 25; row++) {
    let num = 0;
    for (let col = 0; col < 25; col++) {
      if (answer[row][col] === 1) {
        num++;
      } else if (num !== 0) {
        _hHints[row].push(num);
        num = 0;
      }
    }
    if (num !== 0) {
      _hHints[row].push(num);
    }
  }
  hHints = _hHints;

  // 縦ヒント作成
  const _vHints = [];
  for (let i = 0; i < 25; i++) {
    _vHints.push([]);
  }

  for (let col = 0; col < 25; col++) {
    let num = 0;
    for (let row = 0; row < 25; row++) {
      if (answer[row][col] === 1) {
        num++;
      } else if (num !== 0) {
        _vHints[col].push(num);
        num = 0;
      }
    }
    if (num !== 0) {
      _vHints[col].push(num);
    }
  }
  vHints = _vHints;
}
createHintList();

/**
 * ペイントボード作成
 */
function createPaintBoard() {
  const boardElem = document.getElementById("paintboard");
  const crossSvgElem = document.getElementsByClassName("cross-svg")[0];

  for (let row = 0; row < 25; row++) {
    const rowElem = document.createElement("div");
    rowElem.classList.add("row");

    for (let col = 0; col < 25; col++) {
      const gridElem = document.createElement("div");
      gridElem.classList.add("grid");
      gridElem.appendChild(crossSvgElem.cloneNode(true));
      if (answer[row][col] === 1) {
        gridElem.classList.add("fill");
      }
      gridElem.addEventListener("click", (event) => {
        onClickPaintGrid(event);
      });
      rowElem.appendChild(gridElem);
    }
    boardElem.appendChild(rowElem);
  }
}
createPaintBoard();

function createHistBoard() {
  if (vHints === null || hHints === null) {
    throw new Error("Not set hints.");
  }

  const crossSvgElem = document.getElementsByClassName("cross-svg")[0];

  // 縦ヒント作成
  const vHintMaxLength = vHints.reduce(
    (acc, current) => (acc > current.length ? acc : current.length),
    0,
  );

  const vHintsElem = document.getElementById("vhint");
  for (let vHintsCol of vHints) {
    const vHintsColElem = document.createElement("div");
    vHintsColElem.classList.add("hint-col");
    for (let rowNum = 0; rowNum < vHintMaxLength; rowNum++) {
      const hintGrid = document.createElement("div");
      hintGrid.classList.add("grid");
      hintGrid.classList.add("hint");
      hintGrid.appendChild(crossSvgElem.cloneNode(true));
      hintGrid.addEventListener("click", (event) => {
        onClickHintGrid(event);
      });
      if (vHintMaxLength - vHintsCol.length < rowNum + 1) {
        const hintNumElem = document.createElement("span");

        hintNumElem.innerText =
          vHintsCol[rowNum - (vHintMaxLength - vHintsCol.length)];
        hintGrid.appendChild(hintNumElem);
      }
      vHintsColElem.appendChild(hintGrid);
    }
    vHintsElem.appendChild(vHintsColElem);
  }

  // 横ヒント作成
  const hHintMaxLength = hHints.reduce(
    (acc, current) => (acc > current.length ? acc : current.length),
    0,
  );

  const hHintsElem = document.getElementById("hhint");
  for (let hHintsCol of hHints) {
    const hHintsColElem = document.createElement("div");
    hHintsColElem.classList.add("hint-row");
    for (let colNum = 0; colNum < hHintMaxLength; colNum++) {
      const hintGrid = document.createElement("div");
      hintGrid.classList.add("grid");
      hintGrid.classList.add("hint");

      hintGrid.appendChild(crossSvgElem.cloneNode(true));
      hintGrid.addEventListener("click", (event) => {
        onClickHintGrid(event);
      });
      if (hHintMaxLength - hHintsCol.length < colNum + 1) {
        const hintNumElem = document.createElement("span");
        hintNumElem.innerText =
          hHintsCol[colNum - (hHintMaxLength - hHintsCol.length)];
        hintGrid.appendChild(hintNumElem);
      }
      hHintsColElem.appendChild(hintGrid);
    }
    hHintsElem.appendChild(hHintsColElem);
  }
}
createHistBoard();
