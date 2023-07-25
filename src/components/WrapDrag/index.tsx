import Draggable from "react-draggable";
import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./WrapDrag.module.scss";
const cx = classNames.bind(styles);

function WrapDrag(props: any) {
  const { children, ...passProps } = props;
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef} {...passProps}>
      <div className={cx("wrapper")} ref={nodeRef}>
        {children}
      </div>
    </Draggable>
  );
}

export default WrapDrag;
