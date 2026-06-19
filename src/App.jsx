import React from "react";
import Home from "./components/pages/Home";
import "./app.css";

const App = () => {
  // return (
  //   <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-mono overflow-hidden">
  //     {/* Main App Container */}
  //     <div className="relative">
  //       {/* Loading State Placeholder (Static) */}
  //       {/* <div className="fixed inset-0 flex items-center justify-center bg-black/95 z-50">
  //         <div className="w-8 h-8 border-4 border-slate-200 border-t-[#CAEF45] rounded-full animate-spin"></div>
  //       </div> */}

  //       {/* Main Content */}
  //       <div>
  //         {/* Home Page Content - Static Representation */}
  //         <Home />
  //       </div>

  //       {/* 404 Fallback (Static) */}
  //       {/* <PageNotFound /> */}

  //       {/* Toast Container */}
  //       <div id="toaster" className="fixed bottom-4 right-4 z-[100]" />
  //     </div>
  //   </div>
  // );

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-background">
    //   <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full"></div>
    //   <Home />
    // </div>
    <Home />
  );
};

export default App;
