// import { useRef, useState } from "react";

// export default function PuzzleCaptcha({ onSolved }) {
//   const pieceRef = useRef(null);
//   const boxRef = useRef(null);

//   const [dragging, setDragging] = useState(false);
//   const [solved, setSolved] = useState(false);

//   const CORRECT_X = 200;
//   const TOLERANCE = 15;

//   const handleDown = () => setDragging(true);

//   const handleMove = (e) => {
//     if (!dragging || solved) return;

//     const boxLeft = boxRef.current.getBoundingClientRect().left;
//     let newLeft = e.clientX - boxLeft - 20; // center piece

//     // clamp inside box
//     newLeft = Math.max(0, Math.min(newLeft, 260));

//     pieceRef.current.style.left = `${newLeft}px`;
//   };

//   const handleUp = () => {
//     setDragging(false);

//     const x = pieceRef.current.offsetLeft;
//     if (Math.abs(x - CORRECT_X) <= TOLERANCE) {
//       setSolved(true);
//       onSolved?.();
//     }
//   };

//   return (
//     <div onMouseMove={handleMove} onMouseUp={handleUp}>
//       <span style={{ fontWeight: "bold", display: "block", marginBottom: 6 }}>
//         Solve this puzzle 🧩
//       </span>

//       <div
//         ref={boxRef}
//         style={{
//           width: "100%",
//           height: 80,
//           border: "1px solid #ccc",
//           position: "relative",
//           background: "#f3f3f3",
//           borderRadius: 4,
//           overflow: "hidden" // 🔒 keep piece inside
//         }}
//       >
//         <div
//           ref={pieceRef}
//           onMouseDown={handleDown}
//           style={{
//             width: 40,
//             height: 40,
//             background: solved ? "#2ecc71" : "#ff9900",
//             position: "absolute",
//             top: 20,
//             left: 0,
//             cursor: "grab",
//             borderRadius: 4
//           }}
//         />
//       </div>

//       {solved && (
//         <span style={{ color: "green", fontSize: 12 }}>
//           Puzzle solved ✔
//         </span>
//       )}
//     </div>
//   );
// }
