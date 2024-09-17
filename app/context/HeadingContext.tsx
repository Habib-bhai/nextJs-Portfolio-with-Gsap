// "use client"
// import { createContext, useContext, useState, ReactNode } from 'react';

// interface MyContextType {
//     headingDelay: number;
//     setHeadingDelay: React.Dispatch<React.SetStateAction<number>>;
//     loaderDelay: number;
//     setLoaderDelay: React.Dispatch<React.SetStateAction<number>>;
// }

// const MyContext = createContext<MyContextType | undefined>(undefined);

// export const MyProvider = ({ children }: { children: ReactNode }) => {
//   const [headingDelay, setHeadingDelay] = useState<number>(0);
//   const [loaderDelay, setLoaderDelay] = useState<number>(1);

//   return (
//     <MyContext.Provider value={{ headingDelay, setHeadingDelay, loaderDelay, setLoaderDelay }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export const useHeadingContext=()=>{
//   const context = useContext(MyContext);

//   if (!context) {
//     throw new Error('useMyContext must be used within a MyProvider');
//   }

//   return context;
// };


