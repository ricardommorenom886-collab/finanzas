# 💰 FinanzasPro - Control de Finanzas Personales

Aplicación moderna, intuitiva y privada para el control de tus finanzas personales, **100% compatible con Microsoft Windows y Android**.

---

1. **Moneda en Pesos ($):**
   - Valores y formato adaptados de forma nativa a **Pesos** (ej. `$ 1.250.000` o `$ 350.000`), con soporte para seleccionar variantes específicas (Pesos genéricos, Colombianos, Mexicanos, Argentinos, Chilenos, Uruguayos).

2. **Apartado Exclusivo de Gastos Fijos:**
   - Estipula y controla tus obligaciones recurrentes (arriendo, servicios públicos, internet, telefonía, streaming, seguros, colegiaturas, préstamos).
   - Registra el día de vencimiento mensual (ej. *Día 5 de cada mes*).
   - **Marcar como Pagado con 1 clic:** Al liquidar un gasto fijo, se suma automáticamente al registro de gastos del mes para reflejar su impacto en tiempo real en tu balance.
   - Indicadores de estado: *Total comprometido en el mes*, *Ya pagado* y *Pendiente por liquidar*.

3. **Gestión y Modificación de Montos:**
   - Registra ingresos y gastos con categoría, concepto, método de pago, fecha y notas.
   - **Modifica cualquier monto o dato en cualquier momento** haciendo clic en el icono de edición (✏️).
   - Filtros dinámicos por tipo (Ingresos/Gastos), por categoría y buscador instantáneo.

4. **Metas de Ahorro:**
   - Crea objetivos concretos (ej. *Fondo de Emergencia*, *Vacaciones*, *Comprar Laptop*).
   - Define el monto objetivo en pesos y fecha límite estimada.
   - Botones rápidos para **Abonar (+) o Retirar (-)** fondos.
   - Barra de progreso porcentual y celebración con confeti 🎉 al alcanzar el 100%.

5. **Límites de Gastos y Presupuestos:**
   - **Límite Mensual Global**: Tope máximo en pesos que no deseas superar en el mes.
   - **Límites por Categoría**: Asigna presupuestos específicos para Alimentación, Transporte, Ocio, etc.
   - Semáforo de advertencias automático:
     - 🟢 Verde: Dentro del presupuesto (< 70%).
     - 🟡 Ámbar: Cerca del límite (75% - 99%).
     - 🔴 Rojo: Límite excedido con cálculo del sobregasto.

4. **Balance Mensual & Estadísticas:**
   - Selector interactivo de mes y año para revisar cualquier período.
   - Indicadores de Ingresos, Gastos, **Balance Neto (Ahorro del mes)** y Tasa de Ahorro %.
   - **Gráficos interactivos:**
     - Gráfico Donut de distribución de gastos por categoría.
     - Gráfico de barras comparativo de Ingresos vs Gastos.

5. **Privacidad Total y Sin Servidores Externos:**
   - Tus datos se guardan de forma segura en tu navegador local (`localStorage`).
   - Exportación de respaldos en formato **JSON** (para transferir datos).
   - Exportación de reportes en formato **CSV para Microsoft Excel**.

---

## 🚀 Cómo Usar en Microsoft Windows

### Opción 1: Con 1 Clic (Recomendada)
1. Haz doble clic en el archivo **`iniciar.bat`**.
2. Automáticamente se abrirá en tu navegador (Microsoft Edge, Google Chrome, etc.) en `http://localhost:3000`.

### Opción 2: Desde la Terminal
```bash
npm start
# O si prefieres Python:
python server.py
```

### Instalar como Aplicación de Escritorio en Windows:
1. Abre la app en **Microsoft Edge** o **Google Chrome**.
2. Haz clic en el botón **"Instalar App"** en la barra superior o en el icono de instalación que aparece a la derecha de la barra de direcciones del navegador.
3. Se instalará como un programa de escritorio independiente en tu menú de inicio y barra de tareas de Windows.

---

## 📱 Cómo Usar en Teléfonos Android

1. Asegúrate de que tu PC con Windows y tu teléfono Android estén conectados a la **misma red Wi-Fi**.
2. Inicia la aplicación en tu PC (`iniciar.bat` o `npm start`).
3. En la barra superior de la app, haz clic en el botón **"Móvil"**.
4. Verás un **código QR** y la dirección IP local (ej. `http://192.168.1.X:3000`).
5. Abre la cámara de tu teléfono Android y escanea el código QR (o escribe la dirección en Google Chrome).

### Instalar en Android como App Nativa:
1. En Google Chrome para Android, toca el botón de tres puntos (⋮) en la esquina superior derecha.
2. Selecciona **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
3. ¡Listo! Tendrás el icono de FinanzasPro en tus aplicaciones con pantalla completa, barra inferior táctil y modo offline.

---

## 💾 Pasar datos entre Windows y Android

1. En tu PC Windows, ve a la pestaña **"Ajustes & Respaldo"** y haz clic en **"Exportar Respaldo (JSON)"**.
2. En tu Android, abre la misma pestaña y toca en **"Restaurar Respaldo"** para cargar el archivo JSON.
