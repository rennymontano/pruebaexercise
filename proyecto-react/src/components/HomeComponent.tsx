import React, { Component } from 'react'
import { 
    Grid,
    GridComponent, 
    ColumnDirective, 
    ColumnsDirective, 
    Page, 
    Inject,
    Group,
    Sort
  } from '@syncfusion/ej2-react-grids'
import api from '../api/pedidos'
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

class HomeContainer extends Component {

    private grid: Grid | null = null;

    state = {
      ordenes: [],
      navigate: false,
      url: ''
    }

  
    async getPedidos() {
      const response = await api.get('/pedidos').catch((err)=> console.log("Error:", err))
      if(response && response.data) {
        this.setState({
          ordenes: response.data
        })
      }
    }
     
    rowSelected() {
      if(this.grid){
        const { idPedido } = (this.grid.getSelectedRecords()[0] as any)
        this.setState({navigate: true, url: '/form-detalle/' + idPedido})
      }
    }
    
    async componentDidMount() {
      await this.getPedidos();
    }
  
    render() {
      this.rowSelected = this.rowSelected.bind(this)

      const { navigate, url } = this.state
      if (navigate) {
        return <Redirect to={url} push={true} />
      }

      return (
          <div style={{margin:'10%', marginTop: '2%', marginBottom: '5%'}}>
            <div style={{ marginBottom: '2%'}}>
              <Typography variant="h5" component="h2" align="center">
                  REGISTRO DE PEDIDOS
            </Typography>
            </div>

          <GridComponent 
            dataSource={this.state.ordenes} 
            allowPaging={true} 
            allowGrouping ={true}
            allowSorting={true}
            pageSettings={{ pageSize: 30 }} 
            rowSelected={this.rowSelected}
            ref={g => this.grid = g}
          >
            <ColumnsDirective>
              <ColumnDirective field='idPedido' headerText='Pedido ID' textAlign='Center' width='100'/>
              <ColumnDirective field='cliente' headerText='Cliente' width='150'/>
              <ColumnDirective field='pais_ev' headerText='Envìo' width='150'/>
              <ColumnDirective field='pais_des' headerText='Destino' width='150'/>
              <ColumnDirective field='fecha_ev' headerText='Fecha Envìo' textAlign='Right' width='100'/>
              <ColumnDirective field='fecha_Ent' headerText='Fecha Entrega' textAlign='Right' width='100'/>
              <ColumnDirective field='total_pedidos' headerText='Monto' textAlign='Right' format='C2' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Group, Sort]}/>
          </GridComponent>
        </div>
      )
  }

}

export default HomeContainer
