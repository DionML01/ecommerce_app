import * as React from "react";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import MyTextInput from "@/app/login/MyTextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import MyTextBox from "./MyTextBox";
import { IoMdClose } from "react-icons/io";
import ReviewRating from "./ReviewRating";
import type { Review } from "../../../app/product/[id]/page";

type ReviewDialogProps = {
  open: boolean;
  onClose: () => void;
  onAddReview: (review: Review) => void;
};

export default function ReviewDialog({
  open,
  onClose,
  onAddReview: _onAddReview,
}: ReviewDialogProps) {
  // Prevent unused-prop lint until the form is implemented
  void _onAddReview;
  // Example usage inside your form:
  // _onAddReview({ id, rating, name, content, date });
  // onClose();
  // const [openModal, setOpenModal] = React.useState(open);

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason === "backdropClick") return;
        onClose();
      }}
      aria-labelledby="review-dialog-title"
      aria-describedby="review-dialog-description"
      fullWidth
      maxWidth="md" // 👈 makes it larger than the default "sm"
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: { md: 3, xs: 2 },
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: { md: "20px", xs: "10px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <IconButton
          sx={{
            alignSelf: "flex-end",
            width: 36,
            height: 36,
            p: 0,
            borderRadius: 1,
            color: "#fff",
            bgcolor: "#000",
            "&:hover": {
              bgcolor: "#333",
              color: "#fff",
            },
          }}
          onClick={() => onClose()}
        >
          <IoMdClose />
        </IconButton>
        <Typography variant="h3">Write a new Review</Typography>
        <Formik
          initialValues={{ name: "", content: "", rating: 0 }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Name is required")
              .max(12, "Name is too long")
              .min(3, "Name should be at least 3 characters"),
            content: Yup.string()
              .required("Content is required")
              .test(
                "max-words",
                "Content must be at most 100 words",
                (value) => {
                  if (!value) return true;
                  const wordCount = value
                    .trim()
                    .split(/\s+/)
                    .filter(Boolean).length;
                  return wordCount <= 100;
                }
              ),
            rating: Yup.number().min(0.5).max(5).required(),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const newReview: Review = {
              id: Date.now(),
              rating: values.rating,
              name: values.name,
              content: values.content,
              date: new Date().toLocaleString(),
            };
            _onAddReview(newReview);
            toast.success("Review successfully added!");
            setSubmitting(false);
            resetForm();
            onClose();
          }}
        >
          {({ isSubmitting, status, setFieldValue, values }) => (
            <Form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <MyTextInput
                name="name"
                label="Name"
                sx={{
                  "& .MuiOutlinedInput-root fieldset": { borderRadius: "10px" },
                }}
              />
              <MyTextBox name="content" label="Content" />
              <ReviewRating
                value={values.rating}
                disabled={false}
                onChange={(v) => setFieldValue("rating", v)}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  alignSelf: "stretch",
                  borderRadius: "10px",
                  py: 1.25,
                  bgcolor: "black",
                  color: "white",
                  boxShadow: "none",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#333", boxShadow: "none" },
                  "&:disabled": { bgcolor: "grey.300", color: "grey.600" },
                }}
              >
                {isSubmitting ? (
                  <CircularProgress
                    size={20}
                    color="inherit"
                    sx={{ color: "#fff" }}
                  />
                ) : (
                  "Post Review"
                )}
              </Button>
              {status && (
                <Typography color="error" sx={{ mt: 1 }}>
                  {status}
                </Typography>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </Dialog>
  );
}
