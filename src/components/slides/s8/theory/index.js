// S8 Theory Slides Index (Phase 2 진행, 2026-05-16)
// T2.0a/b: 자동 미니사이클 (t1 세션 표지 + t2 이론 목차)
// T2.1a: §1-A 풀스택 + 신뢰 경계 (t3-t8)
// T2.1b: §1-B 분리 배포 + FE·BE 비교 + 용어 (t9-t12)
// T2.2a: §2-A 왜 + 6어휘 + HTTP (t13-t16)
// T2.2b: §2-B 도메인+포트+환경변수 (t17-t19)
// T2.2c: §2-C 빌드+API+F12+단정+안티+용어 (t20-t25)
// T2.3a: §3-A 두 플랫폼 + 환경변수 3종 (t26-t32)
// T2.3b: §3-B 세 번째 단정+.gitignore+안티+키노출+용어 (t33-t37)
// T2.4a: §4-A CORS 정의 + 두 정책 + 화이트리스트 (t38-t42)
// T2.4b: §4-B 네 번째 단정+통과의례+자율디버깅+검증+안티+용어 (t43-t49)
// T2.5a: §5-A 분석 도구 필요성 + 다섯 번째 단정 (t50-t54)
// T2.5b: §5-B Clarity + Sentry (t55-t59)
// T2.5c: §5-C 이벤트 추적 + 종합 + 셋업 시점 + 안티 + 용어 (t60-t67)

import Slide01 from './01-session-cover';
import Slide02 from './02-toc';
import Slide03 from './03-c1-cover';
import Slide04 from './04-c1-fullstack-definition';
import Slide05 from './05-c1-be-need';
import Slide06 from './06-c1-first-assertion';
import Slide07 from './07-c1-trust-boundary';
import Slide08 from './08-c1-restaurant-metaphor';
import Slide09 from './09-c1-deploy-split';
import Slide10 from './10-c1-anti-vs-split';
import Slide11 from './11-c1-fe-vs-be';
import Slide12 from './12-c1-terms';
import Slide13 from './13-c2-cover';
import Slide14 from './14-c2-why-chapter';
import Slide15 from './15-c2-6vocab';
import Slide16 from './16-c2-http';
import Slide17 from './17-c2-domain';
import Slide18 from './18-c2-port';
import Slide19 from './19-c2-env-vars';
import Slide20 from './20-c2-build-deploy';
import Slide21 from './21-c2-api-endpoint';
import Slide22 from './22-c2-devtools';
import Slide23 from './23-c2-second-assertion';
import Slide24 from './24-c2-vocab-precision';
import Slide25 from './25-c2-terms';
import Slide26 from './26-c3-cover';
import Slide27 from './27-c3-platforms';
import Slide28 from './28-c3-platform-split';
import Slide29 from './29-c3-envvar-3types';
import Slide30 from './30-c3-be-secret';
import Slide31 from './31-c3-fe-public';
import Slide32 from './32-c3-local-env';
import Slide33 from './33-c3-third-assertion';
import Slide34 from './34-c3-gitignore';
import Slide35 from './35-c3-anti-vs-safe';
import Slide36 from './36-c3-key-leak';
import Slide37 from './37-c3-terms';
import Slide38 from './38-c4-cover';
import Slide39 from './39-c4-cors-def';
import Slide40 from './40-c4-why-cors';
import Slide41 from './41-c4-two-policies';
import Slide42 from './42-c4-whitelist-effect';
import Slide43 from './43-c4-fourth-assertion';
import Slide44 from './44-c4-rite-of-passage';
import Slide45 from './45-c4-two-paths';
import Slide46 from './46-c4-autonomous-debug';
import Slide47 from './47-c4-standard-command';
import Slide48 from './48-c4-validation-anti';
import Slide49 from './49-c4-terms';
import Slide50 from './50-c5-cover';
import Slide51 from './51-c5-why-analytics';
import Slide52 from './52-c5-fifth-assertion';
import Slide53 from './53-c5-one-user';
import Slide54 from './54-c5-three-tools';
import Slide55 from './55-c5-clarity';
import Slide56 from './56-c5-clarity-vs';
import Slide57 from './57-c5-sentry';
import Slide58 from './58-c5-sentry-info';
import Slide59 from './59-c5-sentry-essence';
import Slide60 from './60-c5-event-tracking';
import Slide61 from './61-c5-event-standards';
import Slide62 from './62-c5-event-vs-clarity';
import Slide63 from './63-c5-three-tools-flow';
import Slide64 from './64-c5-three-tools-table';
import Slide65 from './65-c5-setup-timing';
import Slide66 from './66-c5-anti-vs-correct';
import Slide67 from './67-c5-terms';

export const S8_THEORY_SLIDES = [
  { id: 't1', component: Slide01 },
  { id: 't2', component: Slide02 },
  { id: 't3', component: Slide03 },
  { id: 't4', component: Slide04 },
  { id: 't5', component: Slide05 },
  { id: 't6', component: Slide06 },
  { id: 't7', component: Slide07 },
  { id: 't8', component: Slide08 },
  { id: 't9', component: Slide09 },
  { id: 't10', component: Slide10 },
  { id: 't11', component: Slide11 },
  { id: 't12', component: Slide12 },
  { id: 't13', component: Slide13 },
  { id: 't14', component: Slide14 },
  { id: 't15', component: Slide15 },
  { id: 't16', component: Slide16 },
  { id: 't17', component: Slide17 },
  { id: 't18', component: Slide18 },
  { id: 't19', component: Slide19 },
  { id: 't20', component: Slide20 },
  { id: 't21', component: Slide21 },
  { id: 't22', component: Slide22 },
  { id: 't23', component: Slide23 },
  { id: 't24', component: Slide24 },
  { id: 't25', component: Slide25 },
  { id: 't26', component: Slide26 },
  { id: 't27', component: Slide27 },
  { id: 't28', component: Slide28 },
  { id: 't29', component: Slide29 },
  { id: 't30', component: Slide30 },
  { id: 't31', component: Slide31 },
  { id: 't32', component: Slide32 },
  { id: 't33', component: Slide33 },
  { id: 't34', component: Slide34 },
  { id: 't35', component: Slide35 },
  { id: 't36', component: Slide36 },
  { id: 't37', component: Slide37 },
  { id: 't38', component: Slide38 },
  { id: 't39', component: Slide39 },
  { id: 't40', component: Slide40 },
  { id: 't41', component: Slide41 },
  { id: 't42', component: Slide42 },
  { id: 't43', component: Slide43 },
  { id: 't44', component: Slide44 },
  { id: 't45', component: Slide45 },
  { id: 't46', component: Slide46 },
  { id: 't47', component: Slide47 },
  { id: 't48', component: Slide48 },
  { id: 't49', component: Slide49 },
  { id: 't50', component: Slide50 },
  { id: 't51', component: Slide51 },
  { id: 't52', component: Slide52 },
  { id: 't53', component: Slide53 },
  { id: 't54', component: Slide54 },
  { id: 't55', component: Slide55 },
  { id: 't56', component: Slide56 },
  { id: 't57', component: Slide57 },
  { id: 't58', component: Slide58 },
  { id: 't59', component: Slide59 },
  { id: 't60', component: Slide60 },
  { id: 't61', component: Slide61 },
  { id: 't62', component: Slide62 },
  { id: 't63', component: Slide63 },
  { id: 't64', component: Slide64 },
  { id: 't65', component: Slide65 },
  { id: 't66', component: Slide66 },
  { id: 't67', component: Slide67 },
];
