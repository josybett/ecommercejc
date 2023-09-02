const ProductListCheckout = ({
    items,
    onDelete
}) => {
    return (
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>
                        <abbr title="Position">Nombre</abbr>
                    </th>
                    <th className="position-center">
                        <abbr title="Played">Precio Unitario</abbr>
                    </th>
                    <th className="position-right">
                        <abbr title="Won">Cantidad</abbr>
                    </th>
                    <th className="position-right">
                        <abbr title="Drawn">Total</abbr>
                    </th>
                    <th className="position-right">
                        <abbr title="Drawn">Eliminar</abbr>
                    </th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th colSpan={3} className="position-right">
                        <abbr title="Points">
                            ${items.reduce((sum, item) => sum + item.cantidad, 0)}
                        </abbr>
                    </th>
                    <th className="position-right">
                        ${items.reduce(
                            ( total, { cantidad, price }) => total + ( cantidad * price ), 0
                        )}
                    </th>
                </tr>
            </tfoot>
            <tbody>
                {items.map((
                    producto
                ) => (
                    <tr>
                        <td>{producto.titulo}</td>
                        <td className="position-center">${producto.price}</td>
                        <td className="position-right">{producto.cantidad}</td>
                        <td className="position-right">${producto.cantidad * producto.price}</td>
                        <td className="position-right">
                            <button
                                className="button is-danger is-outlined"
                                onClick={() => onDelete(producto.id)}
                            >
                                <span>Eliminar</span>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductListCheckout;