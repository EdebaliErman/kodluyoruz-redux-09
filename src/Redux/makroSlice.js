import { createSlice } from "@reduxjs/toolkit";
import { marked } from "marked";

const helpText = `Başlık
=======

alt başlık
-----------

### Başka bir derin başlık

Paragraflar ayrılmış
boş bir satırla.

yapmak için satırın sonunda 2 boşluk bırakın.
satır sonu

Metin nitelikleri *italik*, **kalın**,
\`monospace\`, ~~üstü çizili~~ .

Alışveriş listesi:

  * elmalar
  * portakal
  * armutlar

Numaralı liste:

  1. elmalar
  2. portakal
  3. armut

Türkiye Türklerindir

 *[Edebali Erman](https://github.com/EdebaliErman)*`;
export const makroSlice = createSlice({
    name: "makro",
    initialState: {
        items: [],
        current: "Buraya yazınız",
        userText: "Girdi çıktınız..",
        help: helpText,
        isShowHelp: false,


    },
    reducers: {
        makrodownWrite: (state, action) => {
            state.current = action.payload
            state.userText = action.payload
        },
        makrodownTextEdit: (state, action) => {
            const parsed = marked(state.current, { sanitize: true })
            const proccesed = [parsed]

            const textPanelLeft = document.getElementById("textPanelLeft");
            textPanelLeft.innerHTML = proccesed
        },
        showHelp: (state, action) => {
            if (state.isShowHelp) {
                state.current = state.userText
                state.isShowHelp = !state.isShowHelp
            } else {
                state.current = state.help
                state.isShowHelp = !state.isShowHelp
            }

        }
    }
})
export const selectCurrent = (state) => state.makro.current
export const selectUserText = (state) => state.makro.items
export const selectHelpButton = (state) => state.makro.isShowHelp
export const { makrodownWrite, makrodownTextEdit, showHelp } = makroSlice.actions
export default makroSlice.reducer