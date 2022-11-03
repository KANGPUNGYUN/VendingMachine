class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    setup() {
        this.loadData((json) => {
            this.colaFactory(json);
        });
    }

    // 초기방법의 ajax
    // loadData(callback) {
    //     // asynchronous javascript and xml
    //     // javascript object notation
    //     // XML 파일을 서버와 비동기적으로 주고받기위해 등장한게 Ajax인거고 그렇다고 XML만 오갈수 있는게 아니라 JSON같은 다른 파일 포멧도 가능한거고 XMLHttpRequest 생성자가 Ajax 통신을 할 때 필요한 인스턴스를 제공해주고 그 인스턴스를 활용해서 통신하는게 Ajax

    //     
    //     const requestObj = new XMLHttpRequest(); // 서버와 통신하기 위해 객체를 생성합니다.
    //     requestObj.open('GET', 'src/js/item.json'); // 요청 시작
    //     requestObj.onreadystatechange = () => { // readyState 가 변화하면 트리거

    //         if (requestObj.readyState === 4 && requestObj.status === 200) {
    //             callback(JSON.parse(requestObj.responseText));
    //         }
    //     }
    //     requestObj.send(null);
    // }

    //     <li>
    //     <button type="button" class="btn-item" data-item="">
    //         <img src="src/images/Original_Cola.png" alt="" class="img-item">
    //             <strong class="tit-item">Original_Cola</strong>
    //             <span class="txt-price">1000원</span>
    //     </button>
    // </li>

    async loadData(callback) {
        const response = await fetch('src/js/item.json');

        if(response.ok){ // http 상태코드가 200~299일 경우
            callback(await response.json()); // 응답 본문을 읽으면서 객체형태로 파싱합니다.
        } else {
            alert('통신 에러!' + response.status);
        }
    }


    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }
}

export default ColaGenerator;