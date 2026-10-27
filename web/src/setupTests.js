import { setLang } from "shared/lang";
import { setDamageRoll } from "shared/damagecalc";

// 기존 테스트는 영어 메시지를 확인하므로 영어로 맞춰 둔다.
setLang("en");

// 데미지 난수(85~100%)가 있으면 기존 테스트의 정확한 숫자가 흔들리므로, 테스트에서는 가장 센 값으로 고정한다.
// 난수 자체를 확인하는 테스트는 setDamageRoll로 값을 바꾼다.
setDamageRoll(() => 100);
