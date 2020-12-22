import React from 'react'
import './MusicBox.css'

function MusicBox({ urlData }) {
  return (
    <>
      <div className="test">
        <iframe
          id="player"
          class="test"
          width="560"
          height="315"
          src={urlData}
          frameborder="none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          modestbranding="1"
        ></iframe>
      </div>
    </>
  )
}

export default MusicBox

// https://www.youtube.com/embed/I0T2UK6du84?start=57

// https://www.youtube.com/embed/I0T2UK6du84?start=57

/*

new BTN (1초짜리 3초짜리)
onClick => 
1. 이미지 돌기 (*초 동안 만)
2. 영상 재생 (*초 동안 만) + 영상 정지

- 테스트 제작 시 시작시간/유튜브 링크 입력받고 => 시작시간과 유튜브링트 서버에 저장하고 변수에 넣어서 쓰면 될 듯!
- 입력받은 정보 기반으로 iframe으로 영상을 띄우고 (영상은 안 보이게 할 수 있다)
- 1초짜리 재생 버튼을 누르면 1초뒤 재생 종료
- 3초짜리 누르면 시작시간 입력받고 3초뒤 재생 종료

* 결과적으로 필요한 것 *
- 유튜브링크 (영상 저작권 문제가 없는? 저작권 문제가 있는 음원의 경우 단 1초 재생이라도 외부 페이지에서 재생불가! 
따라서, test만들때 유튜브에서 저작권있는 문제인 경우 다른 음악을 고를 수 있게 경고해줄 수 있는 방법 찾아봐야함! )

- 재생 시작시간 ( 초 단위 )

* 궁금한 것 *

소리는 단 한번만 들을 수 있는건지? => 왜 궁금한가? 한번만 들을 수 있다면 영상이 재생되고 다시 눌렀을때 재생시작시간을 재 설정하지 않아도 된다! 
만약 여러번 들을 수 있어야 한다면? => 버튼을 누를때마다 시작시간이 설정된 영상을 새로 불러와야 함

* 팀빌딩 전 까지 구현해볼 것 *

- 유튜브 링크를 받아서 key / 주소 / 재생시간  변수화 시키고 
- 1초버튼 3초버튼 만들고, 버튼 누르면 *초만 재생시키고 종료시키기
- 각각 버튼 눌렀을때 *초동안 이미지 빙글빙글 돌기 

*/
