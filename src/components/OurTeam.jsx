// import { Link } from "react-router-dom"; // Import Link for navigation
// import Team1 from "../assets/Team1.jpg";
// import Team2 from "../assets/solve2.png";
// import Team3 from "../assets/Team3.jpg";

// const OurTeam = () => {
//   const teamMembers = [
//     {
//       image: Team1,
//       name: "Juliana Sikie",
//       title: "Social Specialist",
//       description:
//         "Responsible for creating and administering content on social media platforms.",
//     },
//     {
//       image: Team2,
//       name: "Daniel Gallego",
//       title: "Graphic Design",
//       description:
//         "Make a design to communicate ideas that inspire, inform, or captivate consumers.",
//     },
//     {
//       image: Team3,
//       name: "Samira Hedid",
//       title: "Creative Director",
//       description:
//         "Advertising professional who's in charge of a company's marketing efforts.",
//     },
//   ];

//   return (
//     <section className="py-12" style={{ backgroundColor: "#0b0b5c" }}>
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-white text-center mb-12">
//           Our Team Help Business Succeeding on Social Media
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg p-6 text-center"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-48 object-contain rounded-lg mb-4" // Changed object-cover to object-contain
//               />
//               <h1 className="text-2xl font-bold" style={{ color: "#0b0b5c" }}>
//                 {member.name}
//               </h1>
//               <h3
//                 className="text-lg font-semibold"
//                 style={{ color: "#0b0b5c" }}
//               >
//                 {member.title}
//               </h3>
//               <p className="mt-2" style={{ color: "#0b0b5c" }}>
//                 {member.description}
//               </p>
//               <Link to="/our-team">
//                 <button
//                   className="mt-4 px-4 py-2 rounded-lg text-white"
//                   style={{ backgroundColor: "#f47b20" }}
//                 >
//                   View More
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurTeam;
