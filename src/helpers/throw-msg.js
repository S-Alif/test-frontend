import toast from 'react-hot-toast';

export const successToast = (text) => {
  toast.success(text, {
    style: {
      width: "auto",
      border: '2px solid var(--mdb-success)',
      padding: "10px",
      color: 'var(--mdb-dark)',
      fontWeight: 600
    },
    duration: 3500,
    iconTheme: {
      primary: 'var(--mdb-success)',
      secondary: 'var(--mdb-light)',
    },
  });
}

export const errorToast = (text) => {
  toast.error(text, {
    style: {
      width: "auto",
      border: '2px solid var(--mdb-danger)',
      padding: "10px",
      color: 'var(--mdb-dark)',
      fontWeight: 600
    },
    duration: 3500,
    iconTheme: {
      primary: 'var(--mdb-danger)',
      secondary: 'var(--mdb-light)',
    },
  });
}