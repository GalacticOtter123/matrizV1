        function obtenerValor(id) {
            return parseFloat(document.getElementById(id).value);
        }

        function mostrarToast(mensaje) {
            alert(mensaje);
        }

        function validarMatrices() {
            const matrices = ['a11', 'a12', 'a21', 'a22', 'b11', 'b12', 'b21', 'b22'];
            for (let i = 0; i < matrices.length; i++) {
                const valor = obtenerValor(matrices[i]);
                if (isNaN(valor)) {
                    mostrarToast("¡Debe llenarse todos los espacios!");
                    return false;
                }
            }
            return true;
        }

        function sumar() {
            if (!validarMatrices()) return;
            // Obtiene los valores de las matrices A y B
            const a11 = obtenerValor('a11');
            const a12 = obtenerValor('a12');
            const a21 = obtenerValor('a21');
            const a22 = obtenerValor('a22');
            const b11 = obtenerValor('b11');
            const b12 = obtenerValor('b12');
            const b21 = obtenerValor('b21');
            const b22 = obtenerValor('b22');

            // Realiza la suma de las matrices
            const c11 = a11 + b11;
            const c12 = a12 + b12;
            const c21 = a21 + b21;
            const c22 = a22 + b22;

            // Muestra el resultado
            mostrarResultado(c11, c12, c21, c22);
        }

        function restar() {
            if (!validarMatrices()) return;
            const a11 = obtenerValor('a11');
            const a12 = obtenerValor('a12');
            const a21 = obtenerValor('a21');
            const a22 = obtenerValor('a22');
            const b11 = obtenerValor('b11');
            const b12 = obtenerValor('b12');
            const b21 = obtenerValor('b21');
            const b22 = obtenerValor('b22');

            // Realiza la resta de las matrices
            const c11 = a11 - b11;
            const c12 = a12 - b12;
            const c21 = a21 - b21;
            const c22 = a22 - b22;
            // Muestra el resultado
            mostrarResultado(c11, c12, c21, c22);
        }

        function multiplicar() {
            if (!validarMatrices()) return;
            const a11 = obtenerValor('a11');
            const a12 = obtenerValor('a12');
            const a21 = obtenerValor('a21');
            const a22 = obtenerValor('a22');
            const b11 = obtenerValor('b11');
            const b12 = obtenerValor('b12');
            const b21 = obtenerValor('b21');
            const b22 = obtenerValor('b22');

            // Realiza la multiplicacion de las matrices
            const c11 = a11 * b11;
            const c12 = a12 * b12;
            const c21 = a21 * b21;
            const c22 = a22 * b22;
            // Muestra el resultado
            mostrarResultado(c11, c12, c21, c22);
        }

        function dividir() {
            if (!validarMatrices()) return;
            const a11 = obtenerValor('a11');
            const a12 = obtenerValor('a12');
            const a21 = obtenerValor('a21');
            const a22 = obtenerValor('a22');
            const b11 = obtenerValor('b11');
            const b12 = obtenerValor('b12');
            const b21 = obtenerValor('b21');
            const b22 = obtenerValor('b22');

            // Realiza la division de las matrices
            const c11 = a11 / b11;
            const c12 = a12 / b12;
            const c21 = a21 / b21;
            const c22 = a22 / b22;
            // Muestra el resultado
            mostrarResultado(c11, c12, c21, c22);
        }

        function mostrarResultado(c11, c12, c21, c22) {
            mostrarToast(`Resultado:\n[${c11}, ${c12}]\n[${c21}, ${c22}]`);
        }