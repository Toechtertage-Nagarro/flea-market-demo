import {
  FormControl,
  InputLabel,
  TextareaAutosize,
  Input,
  InputAdornment,
  Button,
  TextField,
  StylesProvider,
  withStyles,
} from "@material-ui/core";
import { constants } from "buffer";
import { ErrorMessage, Form, Formik, FormikProps } from "formik";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { AppContext } from "../..";
import {
  IFleaItem,
  IVendorForm,
} from "../../components/interfaces/vendor-interfaces";
import { Options } from "../../components/Options";
import Toaster from "../../components/Toaster";
import { fleaItemKey } from "../../constants/constant";
import { categoryOptions, conditionOptions } from "../../data/vendorData";
import { getFleaItemsFromLocalstorage } from "../../utils/utils";
import "./Vendor.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#47d7ac",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#47d7ac",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#47d7ac",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#47d7ac",
      },
    },
  },
})(TextField);

export default function Vendor() {
  const fleaItems = useContext(AppContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [isError, setIsError] = useState(false);

  const handleOnSubmit = (values: IVendorForm) => {
    // Bestehende Items holen
    // Wird benötigt um das neue Produkt in die Liste zu speichern
    const localstorageFleaItems = JSON.parse(
      localStorage.getItem(fleaItemKey) || "{}"
    ) as IFleaItem[];

    // Erstellung des zu Verkaufenden Produkts
    const fleaElement: IFleaItem = {
      id: localstorageFleaItems
        ? Math.max(...localstorageFleaItems.map((member) => member.id)) + 1
        : 1,
      category: category,
      condition: condition,
      description: values.description,
      price: values.price,
      name: values.name,
      email: values.email,
    };

    // Validierung für die Pflichtfelder
    const hasRequiredValues: boolean =
      fleaElement.category !== "" &&
      fleaElement.condition !== "" &&
      fleaElement.name !== "" &&
      fleaElement.email !== "" &&
      fleaElement.description !== "";

    // Überprüfung ob alle Pflichtfelder ausgefüllt sind
    if (!hasRequiredValues) {
      // wenn nicht, dann gibt es einen Error
      // und das neue Produkt wird nicht hinzugefügt
      setIsError(true);
      return;
    }

    setIsError(false);

    // Wenn die Pflichtfelder ausgefüllt sind,
    // dann wird das neue Produkt in die Liste gespeichert
    fleaItems.push(fleaElement);
    addToLocalStorage(fleaElement);
  };

  const addToLocalStorage = (fleaItem: IFleaItem) => {
    const localstorageFleaItems = getFleaItemsFromLocalstorage();
    localstorageFleaItems.push(fleaItem);
    localStorage.setItem(fleaItemKey, JSON.stringify(localstorageFleaItems));
  };

  useEffect(() => {}, [openDialog]);

  return (
    <StylesProvider injectFirst>
      <div id="vendor__container" className="vendor-container">
        <div className="page-header">
          <p
            id="vendor__container__description"
            className="vendor-container-description"
          >
            Möchtest du etwas verkaufen oder verschenken, das du selbst nicht
            mehr brauchst?
            <br />
            <br />
            Falls ja: füll einfach das Formular aus, klicke auf "Artikel
            verkaufen" und schon ist dein Artikel{" "}
            <Link className="nav-link" to="/client">
              im Marktplatz{" "}
            </Link>{" "}
            zu finden!
            {/*im Marktplatz als Link*/}
          </p>
        </div>
        <div className="toaster-container">
          {openDialog && (
            <Toaster
              severity={!isError ? "success" : "error"}
              isError={isError}
              setOpenDialog={setOpenDialog}
            />
          )}
        </div>
        <div id="vendor__form__container" className="vendor-form-container">
          <Formik
            initialValues={{
              name: "",
              description: "",
              price: 0,
              email: "",
            }}
            onSubmit={(values: IVendorForm, { resetForm }) => {
              handleOnSubmit(values);
              setOpenDialog(true);
              setCategory("");
              setCondition("");
            }}
            // Das Validierungschema der einzelnen Felder
            validationSchema={Yup.object().shape({
              price: Yup.number().min(
                0,
                "Der Preis darf nicht unter 0 € liegen."
              ),
              email: Yup.string()
                .email("Die E-Mail ist nicht valide.")
                .required("Bitte gib eine E-Mail ein."),
              name: Yup.string()
                .max(30, "Maximal 30 Zeichen erlaubt.")
                .required("Der Artikel muss einen Namen haben."),
              description: Yup.string().required(
                "Füge noch eine Beschreibung ein."
              ),
            })}
          >
            {(props: FormikProps<IVendorForm>) => {
              const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
              } = props;
              return (
                <Form>
                  <CssTextField
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="name"
                    name="name"
                    label="Name der Ware"
                    variant="outlined"
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => <div className="error-message">{msg}</div>}
                  />
                  <Options
                    selectOptions={categoryOptions}
                    hooks={{ value: category, setValue: setCategory }}
                  />
                  <Options
                    selectOptions={conditionOptions}
                    hooks={{ value: condition, setValue: setCondition }}
                  />
                  <FormControl variant="standard">
                    <InputLabel htmlFor="price">Preis</InputLabel>
                    <Input
                      value={values.price}
                      type="number"
                      id="price"
                      name="price"
                      startAdornment={
                        <InputAdornment position="start">€</InputAdornment>
                      }
                      error={errors.price && touched.price ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="price"
                      render={(msg) => (
                        <div className="error-message">{msg}</div>
                      )}
                    />
                  </FormControl>
                  <TextareaAutosize
                    id="description"
                    name="description"
                    value={values.description}
                    aria-label="Gib hier die Beschreibung der Ware ein"
                    minRows={3}
                    placeholder="Gib hier die Beschreibung der Ware ein"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ resize: "none" }}
                  />
                  <ErrorMessage
                    name="description"
                    render={(msg) => <div className="error-message">{msg}</div>}
                  />
                  <CssTextField
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    name="email"
                    label="E-Mail"
                    variant="outlined"
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => <div className="error-message">{msg}</div>}
                  />
                  <Button
                    id="submit__button"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Artikel verkaufen
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </StylesProvider>
  );
}
