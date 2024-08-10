import Layout from "../../components/layout";
import Card from "../../components/card";


const Comprador = () => {
    let cartas = [1, 2,3];
    return (
      <Layout>
       
        <div className="row">
          {cartas.map((carta) => (
            <Card key={carta}/>
          ))}
        </div>
      </Layout>
       

    )
}

export default Comprador;