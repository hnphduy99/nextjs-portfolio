"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  text: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loopTexts?: boolean;
}
/**
 * Typewriter component - Hiệu ứng gõ chữ kiểu máy đánh chữ (typewriter effect)
 * với tuỳ chọn xoay vòng nhiều câu hoặc chỉ gõ một lần.
 *
 * @param {Object} props
 * @param {string[]} props.texts - Danh sách các câu sẽ được gõ.
 *   Nếu `loopTexts = true` sẽ lặp lại toàn bộ mảng này vô hạn.
 * @param {number} [props.typingSpeed=100] - Tốc độ gõ (ms mỗi ký tự).
 * @param {number} [props.deletingSpeed=50] - Tốc độ xoá (ms mỗi ký tự).
 * @param {number} [props.pauseTime=2000] - Thời gian dừng (ms) sau khi gõ xong trước khi xoá.
 * @param {boolean} [props.loopTexts=true] - Bật/tắt chế độ xoay vòng nhiều câu.
 *
 * @returns {JSX.Element} Một phần tử JSX hiển thị hiệu ứng gõ chữ.
 */

export default function TypewriterText({
  className,
  text = ["Hello, Mình là người tạo trang web"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  loopTexts = true,
}: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0); // vị trí ký tự
  const [loop, setLoop] = useState(0); // vị trí câu hiện tại

  useEffect(() => {
    const currentText = text[loop % text.length];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && index === currentText.length) {
      // Gõ xong
      if (!loopTexts && loop === text.length - 1) return; // nếu không loop thì dừng
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && index === 0) {
      // Xoá hết thì qua câu tiếp
      setIsDeleting(false);
      setLoop((prev) => prev + 1);
    }

    const timeout = setTimeout(() => {
      setDisplayedText(currentText.slice(0, index + (isDeleting ? -1 : 1)));
      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [
    index,
    isDeleting,
    loop,
    text,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    loopTexts,
  ]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </motion.span>
  );
}
