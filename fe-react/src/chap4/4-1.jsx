import { useCallback, useEffect, useState } from "react";

function Counter() {
  console.log("Render counter");

  /**
   * useState: 상태 값과 그 값을 갱신하는 함수를 반환
   * - 인자: 초기 상태 값
   * - 반환: [상태 변수, 상태에 대한 Setter]
   */

  const [value, setValue] = useState(0);

  /**
   * useEffect: 컴포넌트가 렌더링 될 때, 특정 작업을 실행
   * - 인자
   *   - 실행하고자 하는 함수 (effect callback)
   *     - effect는 정리(clean-up) 함수를 반환할 수 있음
   *     - 반환된 함수는 컴포넌트가 언마운트 또는 effect 재실행 이전에 실행됨
   *   - 의존성 배열 (dependency list)
   */

  useEffect(() => {
    console.log("[Function] useEffect []: component mount, 한 번만 실행");

    return () => {
      console.log("[Function] useEffect return []: component unmount");
    };
  }, []);

  useEffect(() => {
    console.log(
      "[Function] useEffect [value]: component mount, + value 변경될 때 실행"
    );

    return () => {
      console.log(
        "[Function] useEffect return [value]: 새 useEffect 수행하기 전에 실행"
      );
    };
  }, [value]);

  /**
   * useCallback: 메모이제이션된 콜백을 반환
   * - 인자
   *   - 메모이제이션 할 함수
   *   - 의존성 배열
   * - 반환: 메모이제이션 된 함수
   * *의존성 배열을 제대로 셋팅하지 않으면 함수 안에서 사용되는 값이 업데이트 되지 않은 값일 수 있음
   */

  const increaseValue = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={increaseValue}>+</button>
    </div>
  );
}

export default Counter;
