import "./editarSolicitud.css";

function PageEditarSolicitud() {
    <div className="detallesEditarPedido">
    <h2>Solicitud de pedido</h2>
    <div className="detallesDatos">
        <div className="proveedor">
            <label>Proveedor</label>
            <select id="proveedores" name="proveedores">
                <option value="" selected="selected">- selecciona -</option>
                <option value="proveedor1">Opcion1</option>
                <option value="proveedor2">Opcion2</option>
                <option value="proveedor3">Opcion3</option>
                <option value="proveedor4">Opcion4</option>
            </select>

        </div>
        <div className="fecha" >
            <label>Fecha de entrega</label>
            <input type="date" value="2021-12-04" min="2021-01-01" max="2022-12-31" />
        </div>
        <div className="peticionOferta">
            <label>Petición de oferta</label>
            <input type="text" id="peticionOferta" value="0001" readonly/>
        </div>
    </div>

    <div className="detallesProductos">
        <label>Pedidos</label>
        <table>
            <tr>
                <th scope="col" >Material</th>
                <th scope="col" >Cantidad</th>
                <th scope="col" >Centro</th>
                <th scope="col" >Almacen</th>
                <th scope="col" >P.U</th>
                <th scope="col" >Total</th>
                <th scope="col"> Status</th>
            </tr>
            <tr>
                <td>Laptop</td>
                <td>6</td>
                <td>1010</td>
                <td>01</td>
                <td>$1.000</td>
                <td>$6.000</td>
                <td>X</td>
            </tr>
            <tr>
                <td>Goma</td>
                <td>12</td>
                <td>2010</td>
                <td>02</td>
                <td>$1.500</td>
                <td>$18.000</td>
                <td>X</td>
            </tr>
            <tr>
                <td>Tirata</td>
                <td>3</td>
                <td>1010</td>
                <td>01</td>
                <td>$30.00</td>
                <td>$90.00</td>
                <td>X</td>
            </tr>
        </table>
    </div>
    <button id="btn-grabar">Modificar</button>
</div>

}

export{PageEditarSolicitud};