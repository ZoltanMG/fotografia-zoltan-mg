"""
Este programa imprime la cantidad de casilla que puede desplazarse una dama de ajedrez.
El procedimiento es dividir en 4 cuadrados el tablero de ajedrez ya que la posición de la dama se
comporta como el centro de un plano cartesiano, a cada cuadrado (superior derecha, superior izquierda,
inferior derecha, inferior izquierda) por separado se itera y recorre para determinar las casillas en
diagonal, se suman todas las casillas diagonales más las verticales y horizontales que siempre es la
dimensión (en este caso 8) menos 1 y después multiplicado por 2.
"""

def diagonal_superior_derecha(dimenciones, x, y):
    total = 0
    new_dimencion_x = (dimenciones - x) + 1
    new_dimencion_y = y
    new_x = 1
    new_y = 1
    
    for fila in range(1, new_dimencion_y):
        cont = 1
        for columna in range(1, new_dimencion_x):
            if cont == fila:
                total +=1
            cont += 1
    return total

def diagonal_superior_izquierda(dimenciones, x, y):
    total = 0
    new_dimencion_x = x
    new_dimencion_y = y
    new_x = 1
    new_y = 1
    
    for fila in range(1, new_dimencion_y):
        cont = 1
        for columna in range(1, new_dimencion_x):
            if cont == fila:
                total +=1
            cont += 1
    return total

def diagonal_inferior_derecha(dimenciones, x, y):
    total = 0
    new_dimencion_x = (dimenciones - x) + 1
    new_dimencion_y = (dimenciones - y) + 1
    new_x = 1
    new_y = 1
    
    for fila in range(1, new_dimencion_y):
        cont = 1
        for columna in range(1, new_dimencion_x):
            if cont == fila:
                total +=1
            cont += 1
    return total
    
def diagonal_inferior_izquierda(dimenciones, x, y):
    total = 0
    new_dimencion_x = x
    new_dimencion_y = (dimenciones - y) + 1
    new_x = 1
    new_y = 1
    
    for fila in range(1, new_dimencion_y):
        cont = 1
        for columna in range(1, new_dimencion_x):
            if cont == fila:
                total +=1
            cont += 1
    return total

def contador_casillas_dama(dimenciones, x, y):
    superior_derecha = diagonal_superior_derecha(dimenciones, x, y)
    superior_izquierda = diagonal_superior_izquierda(dimenciones, x, y)
    inferior_derecha = diagonal_inferior_derecha(dimenciones, x, y)
    inferior_izquierda = diagonal_inferior_izquierda(dimenciones, x, y)
    horizontal_y_vertical = ((dimenciones - 1) * 2)
    
    total = superior_izquierda + superior_derecha + inferior_izquierda + inferior_derecha + horizontal_y_vertical
    return total

dimenciones_tablero = 8
posicion_x = 4
posicion_y = 5

casillas_disponibles_dama = contador_casillas_dama(dimenciones_tablero, posicion_x, posicion_y)

print(casillas_disponibles_dama)
