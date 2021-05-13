import React, { Component } from 'react'
import AppForm from '../funciones/AppForm'
import api from '../api/pedidos'

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], 
            url: '',
            navigate: false
        };
        this.idPedido = this.props.match.params.id
    }

    async getDetallePedido() {
        const response = await api.get(`/pedidos?idPedido=${this.props.match.params.id}`)
        .catch((err)=> console.log("Error:", err))
        if(response && response.data) {
            this.setState({data: response.data})
            console.log(this.props.match.params)
        }
    }

    async componentDidMount() {
        await this.getDetallePedido();
    }


    render() {
        return (
            <div>
                {   
                    this.state.data.map((item, i) => {
                       return (<AppForm 
                        key={i} 
                        idPedido={item.idPedido}
                        descripcion={item.descripcion}
                        cliente={item.cliente}
                        pais_ev={item.pais_ev}
                        pais_des={item.pais_des}
                        fecha_ev={item.fecha_ev}
                        fecha_Ent={item.fecha_Ent}
                        total_pedidos={item.total_pedidos}
                        />
                        )
                    })

                }
                
            </div>

        )
    }
}

export default FormComponent;
