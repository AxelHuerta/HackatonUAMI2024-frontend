import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { useState } from "react";
import axios from "axios";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorAlertMessage, setErrorAlertMessage] = useState("Error");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(e.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleForm = async () => {
    await axios
      .post("http://localhost:8080/api/articulos", {
        titulo: title,
        contenido: content,
        descripcion: description,
        categoria: category,
        foto: photo,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setErrorAlertMessage(error.message);
        setErrorAlert(true);
      });
  };

  return (
    <>
      <section className="pt-24 max-w-[1200px] mx-auto px-4 flex flex-col">
        <h1 className="text-6xl font-black text-center">Crear guía</h1>
        <div className="my-4">
          <label htmlFor="titulo" className="text-xl">
            Título del artículo
          </label>
          <Input
            type="text"
            name="titulo"
            id="titulo"
            className="border-black"
            placeholder="Escriba aquí el título del artículo"
            onChange={handleTitleChange}
          />
        </div>

        <div className="my-4">
          <label htmlFor="descripcion" className="text-xl">
            Descripción del artículo
          </label>
          <Input
            type="text"
            name="descripcion"
            id="titulo"
            className="border-black"
            placeholder="Escriba aquí una pequeña descripción del artículo"
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="my-4">
          <label htmlFor="contenido" className="text-xl">
            Contenido del artículo
          </label>
          <Textarea
            name="contenido"
            id="contenido"
            placeholder="Escriba aquí el contenido del artículo"
            className="border-black"
            onChange={handleContentChange}
          />
        </div>

        <div className="my-4">
          <label htmlFor="foto" className="text-xl">
            Foto del artículo
          </label>
          <Input
            type="text"
            name="foto"
            id="titulo"
            className="border-black"
            placeholder="Ingrese aquí el link de una imagen para artículo"
            onChange={handlePhotoChange}
          />
        </div>

        <div className="my-4">
          <span className="text-xl">Seleccione una categoría</span>
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccione una categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categoría</SelectLabel>
                <SelectItem value="ANALISIS_MEDICO">Análisis médico</SelectItem>
                <SelectItem value="ESTUDIOS_MEDICOS">
                  Estudios médicos
                </SelectItem>
                <SelectItem value="SALUD_MENTAL_Y_EMOCIONAL">
                  Salud mental y emocional
                </SelectItem>
                <SelectItem value="RECOMENACIONES_MEDICAS">
                  Recomendaciones médicas
                </SelectItem>
                <SelectItem value="EJERCICIO_Y_ACTIVIDAD_FISICA">
                  Ejercicio y actividad física
                </SelectItem>
                <SelectItem value="PRODUCTOS">Productos</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* publicar articulo */}
        <div className="text-right">
          <Button onClick={handleForm} className="mb-12">
            Publicar artículo
          </Button>
        </div>
      </section>
      {/* alert */}
      {errorAlert && (
        <Alert
          variant={"destructive"}
          className="fixed max-w-xl border-4 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <AlertTitle className="text-xl">
            Hubo un error al crear la guía
          </AlertTitle>
          <AlertDescription className="flex justify-between items-center">
            <p>{errorAlertMessage}</p>
            <Button
              onClick={() => {
                setErrorAlert(false);
              }}
            >
              Cerrar
            </Button>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}

export default Form;
