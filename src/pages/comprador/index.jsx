import Layout from "../../components/layout";
import Card from "../../components/card";
import './style.css';


const Comprador = () => {
    return (
      <Layout>
        <div className="publicacion__container">
          <Card 
            titulo="Mazorca Fresca"
            categoria="Granos y Cereales"
            precio="1.500"
            unidad="kg"
            vendedor="Finca El Progreso"
            descripcion="Mazorca de alta calidad, cultivada de manera orgánica. Ideal para consumo directo o elaboración de productos derivados."
            imagen="mazorca-mercado.jpg"
          />
                    <Card 
            titulo="Mazorca Fresca"
            categoria="Granos y Cereales"
            precio="1.500"
            unidad="kg"
            vendedor="Finca El Progreso"
            descripcion="Mazorca de alta calidad, cultivada de manera orgánica. Ideal para consumo directo o elaboración de productos derivados."
            imagen="mazorca-mercado.jpg"
          />
                    <Card 
            titulo="Mazorca Fresca"
            categoria="Granos y Cereales"
            precio="1.500"
            unidad="kg"
            vendedor="Finca El Progreso"
            descripcion="Mazorca de alta calidad, cultivada de manera orgánica. Ideal para consumo directo o elaboración de productos derivados."
            imagen="mazorca-mercado.jpg"
          />
        </div>
      </Layout>
    )
}

export default Comprador;