import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

function Form() {
  return (
    <section className="pt-24 max-w-[1200px] mx-auto px-4">
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
        />
      </div>

      <div>
        <span className="text-xl">Seleccione una categoría</span>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccione una categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categoría</SelectLabel>
              <SelectItem value="ANALISIS_MEDICO">Análisis médico</SelectItem>
              <SelectItem value="ESTUDIOS_MEDICOS">Estudios médicos</SelectItem>
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
      <div className="text-right">
        <Button>Publicar artículo</Button>
      </div>
    </section>
  );
}

export default Form;
