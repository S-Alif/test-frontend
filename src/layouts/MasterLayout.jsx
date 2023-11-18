import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

import { toast, Toaster, ToastBar } from 'react-hot-toast';

const MasterLayout = ({children, data}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer siteData={data} />

      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button onClick={() => toast.dismiss(t.id)} className="btn shadow-0 p-1 btn-sm fs-6"><i className="fa-solid fa-xmark"></i></button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </>
  );
};

export default MasterLayout;