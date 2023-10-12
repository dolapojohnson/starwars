const Table = ({ films }) => {
      return(
            <>
                  <table>
                        <tr>
                              <th>Name</th>
                              <th>Gender</th>
                              <th>Height</th>
                        </tr>
                        <tr>
                              <td>Joe Cole</td>
                              <td>Maria Anders</td>
                              <td>Germany</td>
                        </tr>
                        <tr>
                              <td>Centro comercial Moctezuma</td>
                              <td>Francisco Chang</td>
                              <td>Mexico</td>
                        </tr>
                        <tr>
                              <td>Ernst Handel</td>
                              <td>Roland Mendel</td>
                              <td>Austria</td>
                        </tr>
                        <tr>
                              <td>Island Trading</td>
                              <td>Helen Bennett</td>
                              <td>UK</td>
                        </tr>
                        <tr>
                              <td>Laughing Bacchus Winecellars</td>
                              <td>Yoshi Tannamuri</td>
                              <td>Canada</td>
                        </tr>
                        <tr>
                              <td>Magazzini Alimentari Riuniti</td>
                              <td>Giovanni Rovelli</td>
                              <td>Italy</td>
                        </tr>
                  </table>

            </>
      )
}

export default Table;