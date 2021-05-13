import React from 'react'
import {FormControl, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: 400,
      },
    },
  }));
  

function AppForm(props) {

    const history = useHistory()     
    const classes = useStyles();

    const redirect = () => {
        history.push('/')
    }


    const { idPedido, descripcion, cliente, pais_ev,  pais_des, fecha_ev, fecha_Ent, total_pedidos} = props
    return (
       <div className= "center-container">
           <div className="boxshadow">
                <form className={classes.root} noValidate autoComplete="off">
                <Button color="primary" onClick={redirect} >Home</Button>
                <div className="text-center">
                    <span>FORMULARIO DETALLE</span>
                </div>
                    <FormControl >
                        <TextField label="Id Pedido" id="idpedido" variant="filled" value={idPedido}/>
                        <TextField label="Importe" id="importe" variant="filled" value={total_pedidos}  />
                        <TextField label="Pais Envío" id="paisenv" variant="filled" value={pais_ev}  />
                        <TextField label="Fecha de Envío" id="fechaenv" variant="filled" value={fecha_ev}  />
                    </FormControl>
                    <FormControl >
                        <TextField label="Cliente" id="cliente" variant="filled" value={cliente}  />
                        <TextField label="Descripción" id="descripcion" variant="filled" value={descripcion}  />
                        <TextField label="Pais de Destino" id="paisdes" variant="filled" value={pais_des}  />
                        <TextField label="Fecha de Entrega" id="fechaent" variant="filled" value={fecha_Ent}  />
                    </FormControl> 
                </form>
            </div>
        </div>
    )
}

export default AppForm