// 자동 생성 파일: web/tools/extract-ps-anims.mjs 로 만든다. 직접 고치지 않는다.
// 원본: Pokemon Showdown 클라이언트의 battle-animations-moves.ts (CC0)와 battle-animations.ts (MIT).
/* eslint-disable */
export const FX_BASE = (typeof process !== "undefined" && process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "") + "/fx/";

export const EFFECTS = {
    "wisp": {
        "url": "wisp.png",
        "w": 100,
        "h": 100
    },
    "rock3": {
        "url": "rock3.png",
        "w": 66,
        "h": 72
    },
    "impact": {
        "url": "impact.png",
        "w": 127,
        "h": 119
    },
    "purplewisp": {
        "url": "purplewisp.png",
        "w": 100,
        "h": 100
    },
    "leftslash": {
        "url": "leftslash.png",
        "w": 57,
        "h": 56
    },
    "energyball": {
        "url": "energyball.png",
        "w": 100,
        "h": 100
    },
    "waterwisp": {
        "url": "waterwisp.png",
        "w": 100,
        "h": 100
    },
    "foot": {
        "url": "foot.png",
        "w": 50,
        "h": 75
    },
    "flareball": {
        "url": "flareball.png",
        "w": 100,
        "h": 100
    },
    "electroball": {
        "url": "electroball.png",
        "w": 100,
        "h": 100
    },
    "iceball": {
        "url": "iceball.png",
        "w": 100,
        "h": 100
    },
    "shadowball": {
        "url": "shadowball.png",
        "w": 100,
        "h": 100
    },
    "leftchop": {
        "url": "leftchop.png",
        "w": 100,
        "h": 130
    },
    "rightchop": {
        "url": "rightchop.png",
        "w": 100,
        "h": 130
    },
    "topbite": {
        "url": "topbite.png",
        "w": 108,
        "h": 64
    },
    "bottombite": {
        "url": "bottombite.png",
        "w": 108,
        "h": 64
    },
    "bluefireball": {
        "url": "bluefireball.png",
        "w": 64,
        "h": 64
    },
    "icicle": {
        "url": "icicle.png",
        "w": 80,
        "h": 60
    },
    "rightslash": {
        "url": "rightslash.png",
        "w": 57,
        "h": 56
    },
    "bone": {
        "url": "bone.png",
        "w": 29,
        "h": 29
    },
    "fist": {
        "url": "fist.png",
        "w": 55,
        "h": 49
    },
    "heart": {
        "url": "heart.png",
        "w": 30,
        "h": 30
    },
    "fireball": {
        "url": "fireball.png",
        "w": 64,
        "h": 64
    },
    "mistball": {
        "url": "mistball.png",
        "w": 100,
        "h": 100
    },
    "leftclaw": {
        "url": "leftclaw.png",
        "w": 44,
        "h": 60
    },
    "rightclaw": {
        "url": "rightclaw.png",
        "w": 44,
        "h": 60
    },
    "lightning": {
        "url": "lightning.png",
        "w": 41,
        "h": 229
    },
    "web": {
        "url": "web.png",
        "w": 120,
        "h": 122
    },
    "angry": {
        "url": "angry.png",
        "w": 30,
        "h": 30
    },
    "gear": {
        "url": "gear.png",
        "w": 100,
        "h": 100
    },
    "stare": {
        "url": "stare.png",
        "w": 100,
        "h": 35
    },
    "leaf1": {
        "url": "leaf1.png",
        "w": 32,
        "h": 26
    },
    "leaf2": {
        "url": "leaf2.png",
        "w": 40,
        "h": 26
    },
    "fist1": {
        "url": "fist1.png",
        "w": 49,
        "h": 55
    },
    "blackwisp": {
        "url": "blackwisp.png",
        "w": 100,
        "h": 100
    },
    "shine": {
        "url": "shine.png",
        "w": 127,
        "h": 119
    },
    "feather": {
        "url": "feather.png",
        "w": 100,
        "h": 38
    },
    "moon": {
        "url": "moon.png",
        "w": 100,
        "h": 100
    },
    "mudwisp": {
        "url": "mudwisp.png",
        "w": 100,
        "h": 100
    },
    "shell": {
        "url": "shell.png",
        "w": 100,
        "h": 91.5
    },
    "rainbow": {
        "url": "rainbow.png",
        "w": 128,
        "h": 128
    },
    "rock1": {
        "url": "rock1.png",
        "w": 64,
        "h": 80
    },
    "rock2": {
        "url": "rock2.png",
        "w": 66,
        "h": 72
    },
    "sword": {
        "url": "sword.png",
        "w": 48,
        "h": 100
    },
    "caltrop": {
        "url": "caltrop.png",
        "w": 80,
        "h": 80
    },
    "pokeball": {
        "url": "pokeball.png",
        "w": 24,
        "h": 24
    },
    "pointer": {
        "url": "pointer.png",
        "w": 100,
        "h": 100
    },
    "poisoncaltrop": {
        "url": "poisoncaltrop.png",
        "w": 80,
        "h": 80
    }
};

export const OTHER = {
    "anger": { anim(scene, [attacker]) {
      scene.showEffect('angry', {
        x: attacker.x + 20,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 0
      }, {
        scale: 1,
        opacity: 1,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('angry', {
        x: attacker.x - 20,
        y: attacker.y + 10,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 100
      }, {
        scale: 1,
        opacity: 1,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('angry', {
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, {
        scale: 1,
        opacity: 1,
        time: 500
      }, 'ballistic2Under', 'fade');
    } },
    "bite": { anim(scene, [attacker, defender]) {
      scene.showEffect('topbite', {
        x: defender.x,
        y: defender.y + 50,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 370
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('bottombite', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 370
      }, {
        x: defender.x,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'fade');
    } },
    "clawattack": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('leftclaw', {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('leftclaw', {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('rightclaw', {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('rightclaw', {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
    } },
    "contactattack": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "dance": { anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10
      });
      attacker.anim({
        x: attacker.x + 10
      });
      attacker.anim({
        x: attacker.x
      });
    } },
    "drain": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 500,
        opacity: 0
      }, 'ballistic2');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 50
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 550,
        opacity: 0
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 600,
        opacity: 0
      }, 'ballistic2Under');
    } },
    "fastattack": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 260
      }, {
        scale: 2,
        opacity: 0,
        time: 560
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 310
      }, {
        scale: 2,
        opacity: 0,
        time: 610
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 300,
        opacity: 0.5
      }, 'accel');
      attacker.anim({
        x: defender.x,
        y: defender.x,
        z: defender.behind(100),
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(70),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 500
      }, 'decel');
      defender.delay(260);
      defender.anim({
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "hydroshot": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x + 10,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3,
        time: 75
      }, {
        x: defender.x - 10,
        y: defender.y - 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3,
        time: 150
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
    } },
    "kick": { anim(scene, [attacker, defender]) {
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.x,
        y: defender.y - 20,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "punchattack": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-15),
        y: defender.y,
        z: defender.behind(15),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "shake": { anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10,
        time: 200
      });
      attacker.anim({
        x: attacker.x + 10,
        time: 300
      });
      attacker.anim({
        x: attacker.x,
        time: 200
      });
    } },
    "slashattack": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
    } },
    "sneakattack": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-20),
        y: attacker.y,
        z: attacker.behind(-20),
        opacity: 0,
        time: 200
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-120),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(40),
        opacity: 1,
        time: 250
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 300
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        time: 300,
        opacity: 1
      }, 'linear');
      defender.delay(330);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "sound": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "spinattack": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic2');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "xattack": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear');
      defender.delay(480);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
    } },
};

export const MOVES = {
    "accelerock": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.fastattack.anim(scene, [attacker, defender]);
      scene.showEffect('rock3', {
        x: defender.x + 30,
        y: defender.y + 25,
        z: defender.z,
        scale: 0.3,
        opacity: 1,
        time: 260
      }, {
        x: defender.x + 50,
        y: defender.y + 10,
        opacity: 0,
        time: 500
      }, 'accel');
      scene.showEffect('rock3', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.3,
        opacity: 1,
        time: 260
      }, {
        x: defender.x - 50,
        y: defender.y - 20,
        opacity: 0,
        time: 500
      }, 'accel');
      scene.showEffect('rock3', {
        x: defender.x + 15,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.3,
        opacity: 1,
        time: 360
      }, {
        x: defender.x + 35,
        y: defender.y + 30,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('rock3', {
        x: defender.x - 15,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.3,
        opacity: 1,
        time: 360
      }, {
        x: defender.x - 35,
        y: defender.y - 40,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.behind(5),
        scale: 1,
        opacity: 0.3,
        time: 260
      }, {
        scale: 1.25,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "acidarmor": { anim(scene, [attacker]) {
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "acidspray": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 400
      }, 'ballistic', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 500
      }, 'ballistic', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 200
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 600
      }, 'ballistic', 'fade');
    } },
    "acrobatics": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-200),
        y: attacker.y + 80,
        z: attacker.z,
        opacity: 0,
        time: 350
      }, 'accel');
      attacker.anim({
        x: defender.leftof(-200),
        y: defender.y + 80,
        z: defender.z,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'accel');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'linear');
      attacker.anim({
        x: defender.leftof(100),
        y: defender.y - 40,
        z: defender.z,
        opacity: 0,
        time: 175
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.behind(40),
        time: 1
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 250
      }, 'decel');
      defender.delay(700);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "aerialace": { anim(scene, [attacker, defender]) {
      scene.showEffect('leftslash', {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 260
      }, {
        scale: 2,
        opacity: 0,
        time: 560
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 260
      }, {
        scale: 2,
        opacity: 0,
        time: 560
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 310
      }, {
        scale: 2,
        opacity: 0,
        time: 610
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x - 60,
        y: defender.y + 60,
        z: defender.behind(-40),
        time: 250
      }, 'ballistic', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-40),
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.x - 60,
        y: defender.y + 60,
        z: defender.behind(-40),
        opacity: 0.5,
        time: 250
      }, {
        x: defender.leftof(-5),
        y: defender.y - 5,
        z: defender.behind(20),
        time: 350
      }, 'ballistic', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-40),
        opacity: 0.5,
        time: 300
      }, {
        x: defender.leftof(-5),
        y: defender.y - 5,
        z: defender.behind(20),
        time: 400
      }, 'ballistic2', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-80),
        time: 200,
        opacity: 0.5
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(-5),
        y: defender.y - 5,
        z: defender.behind(20),
        time: 100,
        opacity: 0.5
      });
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(260);
      defender.anim({
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "agility": { anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10,
        time: 200
      });
      attacker.anim({
        x: attacker.x + 10,
        time: 300
      });
      attacker.anim({
        x: attacker.x - 20,
        time: 150
      });
      attacker.anim({
        x: attacker.x + 20,
        time: 150
      });
      attacker.anim({
        x: attacker.x,
        opacity: 0,
        time: 1
      });
      attacker.delay(550);
      attacker.anim({
        x: attacker.x,
        time: 150
      });
      scene.showEffect(attacker.sp, {
        x: attacker.x + 20,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.5,
        time: 800
      }, {
        x: attacker.x - 30,
        opacity: 0,
        time: 1300
      }, 'decel');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.5,
        time: 800
      }, {
        x: attacker.x + 30,
        opacity: 0,
        time: 1200
      }, 'decel');
    } },
    "airslash": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x + 60,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1
      }, {
        x: defender.x - 70,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 200
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 60,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 70,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 80,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 50,
        y: defender.y - 60,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 80,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        x: defender.x - 50,
        y: defender.y - 60,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 400
      }, 'linear', 'fade');
    } },
    "amnesia": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1
      }, {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1.5,
        opacity: 1,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1.5,
        opacity: 1,
        time: 600
      }, 'ballistic2Under', 'fade');
    } },
    "anchorshot": { anim(scene, [attacker, defender]) {
      let xstep = (defender.x - attacker.x) / 5;
      let ystep = (defender.y - attacker.y) / 5;
      let zstep = (defender.z - attacker.z) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('energyball', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 0.5,
          opacity: 1,
          time: 20 * i
        }, {
          opacity: 0,
          time: 40 * i + 600
        }, 'linear');
      }
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y + 15,
        z: defender.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.3,
        time: 300
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 900
      }, 'decel', 'fade');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.3,
        time: 350
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 950
      }, 'decel', 'fade');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.3,
        time: 400
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 1000
      }, 'decel', 'fade');
      defender.delay(300);
      defender.anim({
        y: defender.y + 15,
        z: defender.behind(10),
        yscale: 1.3,
        time: 200
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.delay(25);
      defender.anim({
        x: defender.leftof(-10),
        y: defender.y + 15,
        z: defender.behind(5),
        yscale: 1.3,
        time: 200
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
    } },
    "ancientpower": { anim(scene, [attacker, defender]) {
      scene.showEffect('rock3', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.2
      }, {
        x: defender.x + 50,
        y: defender.y + 20,
        z: defender.behind(20),
        opacity: 0.6,
        scale: 0.7,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('rock3', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.2
      }, {
        x: defender.x + 40,
        y: defender.y - 30,
        z: defender.behind(20),
        opacity: 0.6,
        scale: 0.7,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('rock3', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.7
      }, {
        x: defender.x - 50,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        scale: 0.8,
        time: 400
      }, 'linear', 'explode');
    } },
    "aquajet": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: attacker.x + 20,
        y: attacker.y + 30,
        z: defender.z,
        scale: 0,
        opacity: 1
      }, {
        y: attacker.y - 20,
        scale: 4,
        opacity: 0
      }, 'decel');
      scene.showEffect('waterwisp', {
        x: Math.floor((attacker.x + defender.x) / 2) - 20,
        y: Math.floor((attacker.y + defender.y) / 2) + 30,
        z: Math.floor((attacker.z + defender.z) / 2),
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        y: Math.floor((attacker.y + defender.y) / 2) - 20,
        scale: 4,
        opacity: 0
      }, 'decel');
      scene.showEffect('waterwisp', {
        x: defender.x + 10,
        y: defender.y + 30,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        y: defender.y - 20,
        scale: 4,
        opacity: 0
      }, 'decel');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 300,
        opacity: 0.5
      }, 'accel');
      attacker.anim({
        x: defender.x,
        y: defender.x,
        z: defender.behind(100),
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(70),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 500
      }, 'decel');
      defender.delay(260);
      defender.anim({
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "aquastep": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.dance.anim(scene, [attacker, defender]);
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.behind(15),
        scale: 1,
        opacity: 1,
        time: 550
      }, {
        x: defender.x - 50,
        z: defender.behind(20),
        scale: 1.7,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.behind(15),
        scale: 1,
        opacity: 1,
        time: 550
      }, {
        x: defender.x - 50,
        z: defender.behind(20),
        scale: 1.7,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "aquatail": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-15),
        scale: 1.5,
        opacity: 0.8,
        time: 400
      }, {
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "armorcannon": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#124763', 700, 0.6);
      scene.backgroundEffect('#FFC001', 300, 0.3, 600);
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 100,
        z: attacker.behind(-20),
        scale: 0.5,
        xscale: 3,
        opacity: 0,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.8,
        xscale: 0.8,
        opacity: 0.8,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('flareball', {
        x: attacker.x - 60,
        y: attacker.y - 80,
        z: attacker.behind(-20),
        scale: 0.5,
        yscale: 3,
        opacity: 0,
        time: 50
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1.5,
        yscale: 1.5,
        opacity: 0.8,
        time: 450
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0,
        time: 0
      }, {
        scale: 0.8,
        opacity: 0.5,
        time: 650
      }, 'decel', 'fade');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0,
        time: 0
      }, {
        scale: 1.5,
        opacity: 0.8,
        time: 650
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.3,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 800
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.3,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 800
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.3,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 825
      }, 'accel', 'explode');
      defender.delay(800);
      defender.anim({
        z: defender.behind(10),
        time: 175
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "aurasphere": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#124763', 700, 0.6);
      scene.backgroundEffect('#FFC001', 300, 0.3, 600);
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 100,
        z: attacker.behind(-20),
        scale: 0.5,
        xscale: 3,
        opacity: 0,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.8,
        xscale: 0.8,
        opacity: 0.8,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 60,
        y: attacker.y - 80,
        z: attacker.behind(-20),
        scale: 0.5,
        yscale: 3,
        opacity: 0,
        time: 50
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1.5,
        yscale: 1.5,
        opacity: 0.8,
        time: 450
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0,
        time: 0
      }, {
        scale: 0.8,
        opacity: 0.5,
        time: 650
      }, 'decel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0,
        time: 0
      }, {
        scale: 1.5,
        opacity: 0.8,
        time: 650
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.8,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 800
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 1,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 800
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 1,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 825
      }, 'accel', 'explode');
      defender.delay(800);
      defender.anim({
        z: defender.behind(10),
        time: 175
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "autotomize": { anim(scene, [attacker]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y - 60,
        z: attacker.z,
        scale: 1,
        xscale: 3,
        opacity: 0.5,
        time: 100
      }, {
        xscale: 6,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 60,
        z: attacker.z,
        scale: 2,
        opacity: 1,
        time: 100
      }, {
        y: attacker.y - 50,
        opacity: 0,
        time: 1000
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        x: attacker.x + 40,
        y: attacker.y + 60,
        opacity: 0,
        time: 500
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        x: attacker.x + 40,
        y: attacker.y + 60,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 60,
        opacity: 0,
        time: 800
      }, 'accel');
      attacker.anim({
        x: attacker.x - 5,
        time: 75
      });
      attacker.anim({
        x: attacker.x + 5,
        time: 100
      });
      attacker.anim({
        x: attacker.x - 10,
        time: 50
      });
      attacker.anim({
        x: attacker.x + 10,
        time: 50
      });
      attacker.anim({
        x: attacker.x - 10,
        time: 50
      });
      attacker.anim({
        x: attacker.x + 10,
        time: 50
      });
      attacker.anim({
        x: attacker.x - 10,
        time: 50
      });
      attacker.anim({
        x: attacker.x + 10,
        time: 50
      });
      attacker.anim({
        x: attacker.x - 10,
        time: 50
      });
      attacker.anim({
        x: attacker.x + 10,
        time: 150
      });
      attacker.anim({
        x: attacker.x,
        time: 150
      });
    } },
    "avalanche": { anim(scene, [attacker, defender]) {
      defender.delay(200);
      defender.anim({
        y: defender.y - 7,
        yscale: 0.9,
        time: 100
      }, 'decel');
      defender.anim({
        time: 200
      });
      defender.delay(200);
      defender.anim({
        y: defender.y - 7,
        yscale: 0.9,
        time: 100
      }, 'decel');
      defender.anim({
        time: 200
      });
      scene.showEffect('wisp', {
        x: defender.x + 15,
        y: defender.y + 100,
        z: defender.z,
        opacity: 0,
        scale: 0.8
      }, {
        y: defender.y - 30,
        opacity: 1,
        time: 300
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x + 30,
        y: defender.y + 100,
        z: defender.z,
        opacity: 0,
        scale: 0.8,
        time: 100
      }, {
        y: defender.y - 30,
        opacity: 1,
        time: 400
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x - 30,
        y: defender.y + 100,
        z: defender.z,
        opacity: 0,
        scale: 0.8,
        time: 200
      }, {
        y: defender.y - 30,
        opacity: 1,
        time: 500
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y + 100,
        z: defender.z,
        opacity: 0,
        scale: 0.8,
        time: 300
      }, {
        y: defender.y - 30,
        opacity: 1,
        time: 600
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x - 15,
        y: defender.y + 100,
        z: defender.z,
        opacity: 0,
        scale: 0.8,
        time: 400
      }, {
        y: defender.y - 30,
        opacity: 1,
        time: 700
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x + 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 300
      }, {
        scale: 2,
        opacity: 0
      }, 'decel');
      scene.showEffect('wisp', {
        x: defender.x - 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 450
      }, {
        scale: 2,
        opacity: 0
      }, 'decel');
      scene.showEffect('wisp', {
        x: defender.x + 10,
        y: defender.y - 40,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 600
      }, {
        scale: 2,
        opacity: 0
      }, 'decel');
    } },
    "banefulbunker": { anim(scene, [attacker]) {
      scene.backgroundEffect('linear-gradient(#440044 30%, #000000', 600, 0.2);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0.5,
        xscale: 0.25,
        yscale: 0.75,
        opacity: 0.5
      }, {
        scale: 2,
        xscale: 3.5,
        opacity: 0.1,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 15,
        z: attacker.z,
        opacity: 0.5,
        scale: 1.5
      }, {
        scale: 1.8,
        opacity: 0.1,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 15,
        z: attacker.z,
        opacity: 1,
        scale: 3
      }, {
        scale: 1.8,
        opacity: 0.5,
        time: 500
      }, 'decel', 'fade');
    } },
    "barbbarrage": { anim(scene, [attacker, defender]) {
      for (let i = 0; i < 8; i++) {
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.4,
          opacity: 0.6,
          time: 0
        }, {
          x: attacker.x + (![0, 4].includes(i) ? 50 * (i > 4 ? -1 : 1) : 0),
          y: attacker.y + (![2, 6].includes(i) ? 50 * (i > 2 && i < 6 ? -1 : 1) : 0),
          z: attacker.z,
          opacity: 0,
          time: 500
        }, 'decel');
        scene.showEffect('purplewisp', {
          x: defender.x + (![0, 4].includes(i) ? 50 * (i > 4 ? -1 : 1) : 0),
          y: defender.y + (![2, 6].includes(i) ? 50 * (i > 2 && i < 6 ? -1 : 1) : 0),
          z: defender.z,
          scale: 0.4,
          opacity: 0.6,
          time: 500
        }, {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          time: 1000
        }, 'decel');
      }
    } },
    "barrier": { anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.1,
        time: 0
      }, {
        scale: 0,
        opacity: 0.5,
        time: 600
      }, 'linear');
    } },
    "batonpass": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1
      }, {
        x: attacker.x,
        y: attacker.y + 100,
        z: attacker.z,
        opacity: 0.1,
        time: 200
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 100,
        z: attacker.z,
        scale: 1,
        opacity: 0.1,
        time: 200
      }, {
        scale: 4,
        opacity: 1,
        time: 400
      }, 'linear', 'explode');
    } },
    "beatup": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "bellydrum": { anim(scene, [attacker]) {
      scene.showEffect('leftchop', {
        x: attacker.x - 20,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 1
      }, {
        z: attacker.behind(5),
        scale: 0.4,
        time: 100
      }, 'linear', 'fade');
      scene.showEffect('rightchop', {
        x: attacker.x + 20,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.6,
        opacity: 1,
        time: 150
      }, {
        z: attacker.behind(5),
        scale: 0.4,
        time: 250
      }, 'linear', 'fade');
      scene.showEffect('leftchop', {
        x: attacker.x - 20,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.6,
        opacity: 1,
        time: 350
      }, {
        z: attacker.behind(5),
        scale: 0.4,
        time: 450
      }, 'linear', 'fade');
      scene.showEffect('rightchop', {
        x: attacker.x + 20,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.6,
        opacity: 1,
        time: 500
      }, {
        z: attacker.behind(5),
        scale: 0.4,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('impact', {
        x: attacker.x - 20,
        y: attacker.y - 10,
        z: attacker.behind(5),
        scale: 0.75,
        opacity: 0.3,
        time: 100
      }, {
        scale: 1,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('impact', {
        x: attacker.x + 20,
        y: attacker.y - 10,
        z: attacker.behind(5),
        scale: 0.75,
        opacity: 0.3,
        time: 250
      }, {
        scale: 1,
        opacity: 0,
        time: 550
      }, 'linear');
      scene.showEffect('impact', {
        x: attacker.x - 20,
        y: attacker.y - 10,
        z: attacker.behind(5),
        scale: 0.75,
        opacity: 0.3,
        time: 400
      }, {
        scale: 1,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('impact', {
        x: attacker.x + 20,
        y: attacker.y - 10,
        z: attacker.behind(5),
        scale: 0.75,
        opacity: 0.3,
        time: 550
      }, {
        scale: 1,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "bite": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.bite.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "bitterblade": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 800, 0.3, 400);
      scene.showEffect('leftslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 400
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'accel', 'fade');
      scene.showEffect('bluefireball', {
        x: defender.x - 60,
        y: defender.y + 70,
        z: defender.z,
        scale: 0.75,
        opacity: 1,
        time: 400
      }, {
        x: defender.x + 60,
        y: defender.y - 70,
        scale: 0.6,
        opacity: 0,
        time: 700
      }, 'decel');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 600
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 900,
        opacity: 0
      }, 'ballistic2');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 650
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 950,
        opacity: 0
      }, 'linear');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 700
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 1000,
        opacity: 0
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "bleakwindstorm": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 900, 0.6);
      for (let i = 0; i < 4; i++) {
        scene.showEffect('wisp', {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 50,
          y: defender.y + 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
      }
    } },
    "blizzard": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#009AA4', 700, 0.5);
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6
      }, {
        x: defender.x + 60,
        y: defender.y + 40,
        z: defender.z,
        scale: 2,
        opacity: 0.3
      }, 'accel', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x + 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 2,
        opacity: 0.3
      }, 'accel', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 60,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.3
      }, 'accel', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 225
      }, {
        x: defender.x - 20,
        y: defender.y + 10,
        z: defender.z,
        scale: 2,
        opacity: 0.3
      }, 'accel', 'explode');
    } },
    "block": { anim(scene, [attacker, defender]) {
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, {
        scale: 1,
        opacity: 1,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('leftslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, {
        scale: 1,
        opacity: 1,
        time: 400
      }, 'linear', 'explode');
    } },
    "bodypress": { anim(scene, [attacker, defender]) {
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 450
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(20),
        time: 100
      });
      attacker.anim({
        time: 600
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        y: defender.y - 30,
        z: defender.behind(20),
        yscale: 0.5,
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "bodyslam": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 600
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        y: defender.y - 30,
        z: defender.behind(20),
        yscale: 0.5,
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "boltbeak": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 450
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "bonemerang": { anim(scene, [attacker, defender]) {
      scene.showEffect('bone', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0
      }, {
        z: defender.behind(20),
        opacity: 1,
        time: 300
      }, 'ballistic2');
      scene.showEffect('bone', {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 1,
        time: 300
      }, {
        z: attacker.z,
        opacity: 0,
        time: 600
      }, 'ballistic2Under', 'fade');
    } },
    "boomburst": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(125);
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 150
        }, 'swing');
      }
      scene.backgroundEffect('#000000', 900, 0.5);
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "bounce": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 350
      }, {
        scale: 3,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 450
      }, {
        scale: 3,
        opacity: 0,
        time: 600
      }, 'linear');
      attacker.anim({
        y: attacker.y + 80,
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.z,
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.z,
        opacity: 0,
        time: 300
      }, 'linear');
      attacker.anim({
        x: attacker.x,
        y: attacker.y + 80,
        z: defender.z,
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        time: 300,
        opacity: 1
      }, 'linear');
      defender.delay(380);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "bravebird": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-200),
        y: attacker.y + 80,
        z: attacker.z,
        opacity: 0,
        time: 350
      }, 'accel');
      attacker.anim({
        x: defender.leftof(-200),
        y: defender.y + 80,
        z: defender.z,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'accel');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'linear');
      attacker.anim({
        x: defender.leftof(100),
        y: defender.y - 40,
        z: defender.z,
        opacity: 0,
        time: 175
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.behind(40),
        time: 1
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 250
      }, 'decel');
      defender.delay(700);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "brickbreak": { anim(scene, [attacker, defender]) {
      scene.showEffect('rightchop', {
        x: defender.leftof(30),
        y: defender.y + 50,
        z: defender.behind(-10),
        scale: 0.6,
        opacity: 1,
        time: 475
      }, {
        y: defender.y - 20,
        opacity: 0.5,
        time: 550
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "bugbite": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.bite.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "bugbuzz": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.3,
        time: 0
      }, {
        scale: 8,
        opacity: 0.07,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.3,
        time: 100
      }, {
        scale: 8,
        opacity: 0.07,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.3,
        time: 200
      }, {
        scale: 8,
        opacity: 0.07,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 500
      }, {
        scale: 2,
        opacity: 0.1,
        time: 800
      }, 'linear', 'fade');
    } },
    "bulkup": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1,
        time: 500
      }, {
        x: attacker.leftof(-30),
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1,
        opacity: 0.3,
        time: 800
      }, 'ballistic2Under', 'fade');
      attacker.anim({
        y: attacker.y + 4,
        scale: 1.15,
        time: 200
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        time: 200
      }, 'decel');
    } },
    "bulldoze": { anim(scene, [attacker, ...defenders]) {
      scene.$bg.delay(275);
      scene.$bg.animate({
        top: -90,
        bottom: 0
      }, 75).animate({
        top: -100,
        bottom: -10
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92.5,
        bottom: -2.5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92.5,
        bottom: -2.5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100);
      attacker.anim({
        y: attacker.y + 20,
        time: 175
      }, 'swing');
      attacker.anim({
        y: attacker.y,
        time: 125
      }, 'accel');
      attacker.anim({
        y: attacker.y - 10,
        yscale: 1,
        time: 75
      });
      attacker.anim({
        y: attacker.y + 10,
        yscale: 0.9,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 5,
        yscale: 1,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 5,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 5,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 5,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 5,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 5,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 2,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 2,
        time: 100
      });
      attacker.anim({
        y: attacker.y,
        time: 100
      });
      for (const defender of defenders) {
        defender.delay(275);
        defender.anim({
          y: defender.y - 10,
          time: 75
        });
        defender.anim({
          y: defender.y + 10,
          time: 100
        });
        defender.anim({
          y: defender.y - 5,
          time: 100
        });
        defender.anim({
          y: defender.y + 5,
          time: 100
        });
        defender.anim({
          y: defender.y - 5,
          time: 100
        });
        defender.anim({
          y: defender.y + 5,
          time: 100
        });
        defender.anim({
          y: defender.y - 5,
          time: 100
        });
        defender.anim({
          y: defender.y + 5,
          time: 100
        });
        defender.anim({
          y: defender.y - 2,
          time: 100
        });
        defender.anim({
          y: defender.y + 2,
          time: 100
        });
        defender.anim({
          y: defender.y,
          time: 100
        });
      }
      scene.wait(325);
    } },
    "bulletpunch": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.fastattack.anim(scene, [attacker, defender]);
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 260
      }, {
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.behind(5),
        scale: 1,
        opacity: 0.3,
        time: 260
      }, {
        scale: 1.25,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "bulletseed": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.6,
        time: 30
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 330
      }, 'linear', 'fade');
    } },
    "calmmind": { anim(scene, [attacker]) {
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.1,
        time: 0
      }, {
        scale: 0,
        opacity: 0.5,
        time: 400
      }, 'linear');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.1,
        time: 200
      }, {
        scale: 0,
        opacity: 0.5,
        time: 600
      }, 'linear');
    } },
    "celebrate": { anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10
      });
      attacker.anim({
        x: attacker.x + 10
      });
      attacker.anim({
        x: attacker.x
      });
    } },
    "charm": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.shake.anim(scene, [attacker]);
      scene.showEffect('heart', {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 0
      }, {
        scale: 1,
        opacity: 1,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('heart', {
        x: defender.x - 20,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 100
      }, {
        scale: 1,
        opacity: 1,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('heart', {
        x: defender.x,
        y: defender.y + 40,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, {
        scale: 1,
        opacity: 1,
        time: 500
      }, 'ballistic2Under', 'fade');
    } },
    "chatter": { anim(scene, [attacker]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "chillyreception": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 750, 1, 50);
      if (attacker.sp.url) {
        const url = attacker.sp.url;
        const sprite = {
          url: url.replace('-back', ''),
          w: attacker.sp.w,
          h: attacker.sp.h
        };
        scene.showEffect(sprite, {
          x: scene.battle.mySide.x + 65,
          y: scene.battle.mySide.y + 65,
          z: scene.battle.mySide.z,
          scale: 1.5,
          opacity: 1,
          time: 50
        }, {
          opacity: 0,
          time: 800
        }, 'decel');
        sprite.url = url;
        scene.showEffect(sprite, {
          x: scene.battle.mySide.x + 65,
          y: scene.battle.mySide.y + 65,
          z: scene.battle.mySide.z,
          scale: 1.5,
          opacity: 0,
          time: 800
        }, {
          opacity: 1,
          time: 1550
        }, 'decel');
      }
      scene.backgroundEffect(`url('${FX_BASE}weather-hail.png')`, 750, 1, 800);
    } },
    "circlethrow": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        z: defender.behind(20),
        scale: 0.6,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('rightchop', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        z: defender.behind(20),
        scale: 1,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-15),
        y: defender.y,
        z: defender.behind(15),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "clearsmog": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.6,
        time: 0
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(10),
        scale: 1,
        opacity: 0.3,
        time: 400
      }, 'decel', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.7,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 20,
        y: defender.y + 5,
        z: defender.behind(10),
        scale: 1,
        opacity: 0.3,
        time: 500
      }, 'decel', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.7,
        opacity: 1,
        time: 200
      }, {
        x: defender.x + 25,
        y: defender.y,
        z: defender.behind(10),
        scale: 1,
        opacity: 0.3,
        time: 600
      }, 'decel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x + 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.x + 40,
        y: defender.y + 20,
        scale: 1.4,
        opacity: 0.2,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 40,
        y: defender.y + 20,
        scale: 1.4,
        opacity: 0.2,
        time: 900
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 600
      }, {
        x: defender.x + 20,
        y: defender.y + 20,
        scale: 1.4,
        opacity: 0.2,
        time: 1000
      }, 'linear', 'fade');
    } },
    "closecombat": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 350
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 150
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 425
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 525
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x - 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 450
      }, {
        x: defender.x - 20,
        y: defender.y + 30,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 550
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x + 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 475
      }, {
        x: defender.x + 35,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 575
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 575
      }, {
        x: defender.x - 35,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 775
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 600
      }, {
        x: defender.x + 10,
        y: defender.y - 15,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 750
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 650
      }, {
        x: defender.x - 10,
        y: defender.y + 15,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 800
      }, 'linear', 'explode');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 525
      }, {
        scale: 3,
        opacity: 0,
        time: 825
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 750
      }, {
        scale: 3,
        opacity: 0,
        time: 1050
      }, 'linear');
    } },
    "coil": { anim(scene, [attacker]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y + 15,
        z: attacker.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.6,
        time: 0
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y - 5,
        z: attacker.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.6,
        time: 50
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 550
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.6,
        time: 100
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 600
      }, 'decel', 'fade');
      attacker.anim({
        y: attacker.y + 5,
        yscale: 1.1,
        time: 300
      }, 'swing');
      attacker.delay(400);
      attacker.anim({
        time: 300
      }, 'swing');
    } },
    "confide": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "copycat": { anim() {} },
    "corrosivegas": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: defender.x + 10,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 1,
        time: 0
      }, {
        x: defender.x + 10,
        y: defender.y + 20,
        scale: 0.7,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('purplewisp', {
        x: defender.x - 30,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 30,
        y: defender.y + 20,
        scale: 0.7,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('purplewisp', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 1,
        time: 200
      }, {
        x: defender.x + 40,
        y: defender.y + 20,
        scale: 0.7,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "cosmicpower": { anim(scene, [attacker]) {
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 600, 0.6);
      scene.showEffect('wisp', {
        x: attacker.x + 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 0
      }, {
        y: attacker.y + 60,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x - 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        y: attacker.y + 60,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 60,
        opacity: 0,
        time: 800
      }, 'accel');
    } },
    "counter": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "courtchange": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 400
      }, 'ballistic2Under');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 200
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 600
      }, 'ballistic2Under');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 600
      }, 'ballistic');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 800
      }, 'ballistic');
    } },
    "crabhammer": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-15),
        scale: 1.5,
        opacity: 0.8,
        time: 400
      }, {
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "crosspoison": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 300
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 425
      }, {
        scale: 2,
        opacity: 0.5,
        time: 725
      }, 'linear', 'fade');
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 625
      }, {
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('leftslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 625
      }, {
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 450
      }, {
        x: defender.x + 30,
        y: defender.y + 10,
        scale: 1,
        opacity: 0.5,
        time: 750
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 550
      }, {
        x: defender.x - 30,
        y: defender.y - 40,
        scale: 1,
        opacity: 0.5,
        time: 850
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 650
      }, {
        x: defender.x - 10,
        y: defender.y + 40,
        scale: 1,
        opacity: 0.5,
        time: 950
      }, 'decel', 'fade');
    } },
    "crunch": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 800, 0.3);
      scene.showEffect('topbite', {
        x: defender.x,
        y: defender.y + 70,
        z: defender.z,
        scale: 0.65,
        opacity: 0,
        time: 370
      }, {
        y: defender.y + 20,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('bottombite', {
        x: defender.x,
        y: defender.y - 70,
        z: defender.z,
        scale: 0.65,
        opacity: 0,
        time: 370
      }, {
        y: defender.y - 20,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "curse": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "darkestlariat": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.6);
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        scale: 8,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        scale: 8,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "darkpulse": { anim(scene, [attacker, defender]) {
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.backgroundEffect('#000000', 900, 0.3);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 1,
        xscale: 5,
        opacity: 0.8,
        time: 0
      }, {
        scale: 2,
        xscale: 8,
        opacity: 0.1,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 500
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      for (let i = 0; i < 4; i++) {
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.4
        }, {
          x: attacker.x + 240 * xf[i],
          y: attacker.y,
          z: attacker.z + 137 * yf[i],
          scale: 0.7,
          opacity: 0.4,
          time: 600
        }, 'accel', 'fade');
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.2,
          opacity: 0.4
        }, {
          x: attacker.x + 339 * xf2[i],
          y: attacker.y,
          z: attacker.z + 194 * yf2[i],
          scale: 0.5,
          opacity: 0.4,
          time: 600
        }, 'accel', 'fade');
      }
    } },
    "darkvoid": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.anim({
          y: defender.y - 80,
          opacity: 0,
          time: 300
        }, 'accel');
        defender.anim({
          y: defender.y,
          opacity: 0,
          time: 200
        });
        defender.delay(200);
        defender.anim({
          y: defender.y,
          opacity: 1,
          time: 200
        });
      }
      const defender = defenders[1] || defenders[0];
      scene.backgroundEffect('#AA0000', 700, 0.3);
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 1,
        xscale: 3,
        opacity: 0.8,
        time: 0
      }, {
        scale: 2,
        xscale: 8,
        opacity: 0.1,
        time: 600
      }, 'accel', 'fade');
    } },
    "dazzlinggleam": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#FF99FF', 700, 0.5);
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 275
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 225
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 425
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
    } },
    "defog": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#FFFFFF', 900, 0.5);
      BattleOtherAnims.sound.anim(scene, [attacker, defender]);
    } },
    "destinybond": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 200
      }, {
        scale: 3,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 200
      }, {
        scale: 3,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "diamondstorm": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#FF99FF', 700, 0.3);
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 275
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 225
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 425
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
    } },
    "direclaw": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('leftclaw', {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('leftclaw', {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('rightclaw', {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('rightclaw', {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
    } },
    "discharge": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 0
      }, {
        scale: 8,
        opacity: 0.1,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 150
      }, {
        scale: 8,
        opacity: 0.1,
        time: 750
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 300
      }, {
        scale: 8,
        opacity: 0.1,
        time: 900
      }, 'linear', 'fade');
    } },
    "dive": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 350
      }, {
        scale: 3,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 450
      }, {
        scale: 3,
        opacity: 0,
        time: 600
      }, 'linear');
      attacker.anim({
        y: attacker.y - 80,
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y - 80,
        z: defender.z,
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'decel');
      attacker.anim({
        x: defender.x,
        y: defender.y - 80,
        z: defender.z,
        opacity: 0,
        time: 300
      }, 'accel');
      attacker.anim({
        y: attacker.y - 80,
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        time: 300,
        opacity: 1
      }, 'decel');
      defender.delay(380);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "doubleedge": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.2);
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "doubleshock": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.7,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 750
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "dracometeor": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 1100, 0.8);
      scene.showEffect('flareball', {
        x: defender.leftof(-200),
        y: defender.y + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x + 50,
        y: defender.y,
        scale: 1.5,
        opacity: 0.8
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.leftof(-200),
        y: defender.y + 20 + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y - 5,
        scale: 1.5,
        opacity: 0.8
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.leftof(-200),
        y: defender.y - 20 + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 300
      }, {
        x: defender.x + 30,
        y: defender.y - 10,
        scale: 1.5,
        opacity: 0.8
      }, 'accel', 'explode');
      scene.showEffect('rock3', {
        x: defender.leftof(-200),
        y: defender.y + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x + 30,
        y: defender.y,
        scale: 1.5,
        opacity: 0.4
      }, 'accel', 'explode');
      scene.showEffect('rock3', {
        x: defender.leftof(-200),
        y: defender.y + 20 + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 150
      }, {
        x: defender.x - 20,
        y: defender.y - 5,
        scale: 1.5,
        opacity: 0.4
      }, 'accel', 'explode');
      scene.showEffect('rock3', {
        x: defender.leftof(-200),
        y: defender.y - 20 + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 300
      }, {
        x: defender.x + 20,
        y: defender.y,
        scale: 1.5,
        opacity: 0.4
      }, 'accel', 'explode');
      scene.showEffect('shadowball', {
        x: defender.x + 30,
        y: defender.y - 50,
        z: defender.z,
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 500
      }, {
        scale: 3,
        xscale: 8,
        opacity: 0.1,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x - 20,
        y: defender.y - 50,
        z: defender.z,
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 650
      }, {
        scale: 3,
        xscale: 8,
        opacity: 0.1,
        time: 850
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 650
      }, {
        scale: 4,
        opacity: 0,
        time: 850
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x + 20,
        y: defender.y - 50,
        z: defender.z,
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 700
      }, {
        scale: 3,
        xscale: 8,
        opacity: 0.1,
        time: 900
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 700
      }, {
        scale: 4,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('rock3', {
        x: defender.leftof(-200),
        y: defender.y - 20 + 150,
        z: defender.z,
        scale: 0.1,
        opacity: 0.6,
        time: 50
      }, {
        x: defender.x - 250,
        y: defender.y - 80,
        z: defender.behind(60),
        scale: 0.8,
        opacity: 0
      }, 'accel', 'fade');
      scene.showEffect('rock3', {
        x: defender.leftof(-220),
        y: defender.y + 20 + 130,
        z: defender.z,
        scale: 0.1,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x + 80,
        y: defender.y - 50,
        z: defender.behind(30),
        scale: 0.8,
        opacity: 0
      }, 'accel', 'fade');
      scene.showEffect('rock3', {
        x: defender.leftof(-180),
        y: defender.y + 20 + 130,
        z: defender.z,
        scale: 0.1,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x - 200,
        y: defender.y + 20,
        z: defender.behind(30),
        scale: 0.8,
        opacity: 0
      }, 'accel', 'fade');
      defender.delay(500);
      defender.anim({
        x: defender.x + 30,
        z: defender.behind(10),
        time: 75
      });
      defender.anim({
        x: defender.x - 30,
        time: 100
      });
      defender.anim({
        x: defender.x + 30,
        time: 100
      });
      defender.anim({
        x: defender.x - 30,
        z: defender.behind(10),
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
    } },
    "dragonclaw": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('leftclaw', {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('leftclaw', {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('rightclaw', {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('rightclaw', {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
    } },
    "dragondance": { anim(scene, [attacker]) {
      BattleOtherAnims.shake.anim(scene, [attacker]);
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        x: attacker.x - 50,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 300
      }, 'ballistic');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        x: attacker.x + 60,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 450
      }, 'ballistic');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x + 10,
        y: attacker.y - 60,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'ballistic');
    } },
    "dragondarts": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(40),
        scale: 1,
        opacity: 0.2
      }, 'decel');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(40),
        scale: 1,
        opacity: 0.2
      }, 'decel');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(40),
        scale: 1,
        opacity: 0.2
      }, 'decel');
    } },
    "dragonpulse": { anim(scene, [attacker, defender]) {
      let xstep = (defender.x - attacker.x) / 5;
      let ystep = (defender.y - attacker.y) / 5;
      let zstep = (defender.z - attacker.z) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('wisp', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 1,
          opacity: 1,
          time: 20 * i
        }, {
          scale: 2,
          opacity: 0,
          time: 40 * i + 600
        }, 'linear');
        scene.showEffect('purplewisp', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 0.5,
          opacity: 0.3,
          time: 20 * i
        }, {
          scale: 2,
          opacity: 0,
          time: 40 * i + 600
        }, 'linear');
      }
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-15),
        scale: 0.5,
        opacity: 0.6
      }, {
        scale: 0.6,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.1,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.1,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.1,
        time: 200
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.1,
        time: 300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 500
      }, 'linear', 'explode');
    } },
    "dragontail": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "drainingkiss": { anim(scene, [attacker, defender]) {
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 500,
        opacity: 0
      }, 'ballistic2');
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 50
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 550,
        opacity: 0
      }, 'linear');
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 600,
        opacity: 0
      }, 'ballistic2Under');
    } },
    "drainpunch": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 600
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 900,
        opacity: 0
      }, 'ballistic2');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 650
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 950,
        opacity: 0
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 700
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 1000,
        opacity: 0
      }, 'ballistic2Under');
      BattleOtherAnims.punchattack.anim(scene, [attacker, defender]);
    } },
    "drillrun": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 200
      });
      defender.anim({
        z: defender.behind(0),
        time: 200
      });
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 300
      }, {
        scale: 3,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 400
      }, {
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 300
      }, {
        scale: 2,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 500
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('flareball', {
        x: defender.leftof(10),
        y: defender.y - 10,
        z: defender.behind(-40),
        scale: 0.7,
        yscale: 1,
        opacity: 0.8,
        time: 300
      }, {
        z: defender.behind(5),
        scale: 0,
        xscale: 0,
        yscale: 0,
        time: 450
      }, 'accel');
      scene.showEffect('flareball', {
        x: defender.leftof(10),
        y: defender.y - 10,
        z: defender.behind(-40),
        scale: 0.7,
        yscale: 1,
        opacity: 0.8,
        time: 350
      }, {
        z: defender.behind(5),
        scale: 0,
        xscale: 0,
        yscale: 0,
        time: 500
      }, 'accel');
      scene.showEffect('flareball', {
        x: defender.leftof(10),
        y: defender.y - 10,
        z: defender.behind(-40),
        scale: 0.7,
        yscale: 1,
        opacity: 0.8,
        time: 400
      }, {
        z: defender.behind(5),
        scale: 0,
        xscale: 0,
        yscale: 0,
        time: 550
      }, 'accel');
    } },
    "dualwingbeat": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-200),
        y: attacker.y + 80,
        z: attacker.z,
        opacity: 0,
        time: 350
      }, 'accel');
      attacker.anim({
        x: defender.leftof(-200),
        y: defender.y + 80,
        z: defender.z,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'accel');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'linear');
      attacker.anim({
        x: defender.leftof(100),
        y: defender.y - 40,
        z: defender.z,
        opacity: 0,
        time: 175
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.behind(40),
        time: 1
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 250
      }, 'decel');
      defender.delay(700);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "earthpower": { anim(scene, [attacker, defender]) {
      scene.$bg.animate({
        top: -90,
        bottom: 0
      }, 75).animate({
        top: -100,
        bottom: -10
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92.5,
        bottom: -2.5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92.5,
        bottom: -2.5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100);
      scene.showEffect('fireball', {
        x: defender.x + 10,
        y: defender.y - 35,
        z: defender.z,
        scale: 0,
        opacity: 0.8
      }, {
        scale: 3,
        opacity: 0
      }, 'linear');
      scene.showEffect('rock3', {
        x: defender.x + 10,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 0
      }, {
        x: defender.x + 30,
        y: defender.y + 50,
        scale: 0.5,
        opacity: 0,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x + 10,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 50,
        scale: 0.5,
        opacity: 0,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 200
      }, {
        x: defender.x + 35,
        y: defender.y + 50,
        scale: 0.5,
        opacity: 0,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x - 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0,
        opacity: 0.8,
        time: 150
      }, {
        scale: 3,
        opacity: 0
      }, 'linear');
      scene.showEffect('rock3', {
        x: defender.x - 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 60,
        y: defender.y + 45,
        scale: 0.5,
        opacity: 0,
        time: 450
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x - 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 250
      }, {
        x: defender.x - 20,
        y: defender.y + 45,
        scale: 0.5,
        opacity: 0,
        time: 550
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x - 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 350
      }, {
        x: defender.x - 35,
        y: defender.y + 45,
        scale: 0.5,
        opacity: 0,
        time: 650
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0,
        opacity: 0.8,
        time: 300
      }, {
        scale: 3,
        opacity: 0
      }, 'linear');
      scene.showEffect('rock3', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 60,
        y: defender.y + 65,
        scale: 0.5,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 400
      }, {
        x: defender.x + 20,
        y: defender.y + 65,
        scale: 0.5,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 500
      }, {
        x: defender.x + 30,
        y: defender.y + 65,
        scale: 0.5,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      defender.delay(50);
      defender.anim({
        y: defender.y - 10,
        time: 75
      });
      defender.anim({
        y: defender.y + 10,
        time: 100
      });
      defender.anim({
        y: defender.y - 7,
        time: 100
      });
      defender.anim({
        y: defender.y + 7,
        time: 100
      });
      defender.anim({
        y: defender.y - 7,
        time: 100
      });
      defender.anim({
        y: defender.y + 7,
        time: 100
      });
      defender.anim({
        y: defender.y - 2,
        time: 100
      });
      defender.anim({
        y: defender.y + 2,
        time: 100
      });
      defender.anim({
        y: defender.y,
        time: 100
      });
    } },
    "earthquake": { anim(scene, [attacker, ...defenders]) {
      scene.$bg.animate({
        top: -90,
        bottom: 0
      }, 75).animate({
        top: -100,
        bottom: -10
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92,
        bottom: -2
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92,
        bottom: -2
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100);
      attacker.anim({
        y: attacker.y - 10,
        yscale: 1,
        time: 75
      });
      attacker.anim({
        y: attacker.y + 10,
        yscale: 0.9,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 7,
        yscale: 1,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 2,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 2,
        time: 100
      });
      attacker.anim({
        y: attacker.y,
        time: 100
      });
      for (const defender of defenders) {
        defender.anim({
          y: defender.y - 10,
          time: 75
        });
        defender.anim({
          y: defender.y + 10,
          time: 100
        });
        defender.anim({
          y: defender.y - 7,
          time: 100
        });
        defender.anim({
          y: defender.y + 7,
          time: 100
        });
        defender.anim({
          y: defender.y - 7,
          time: 100
        });
        defender.anim({
          y: defender.y + 7,
          time: 100
        });
        defender.anim({
          y: defender.y - 7,
          time: 100
        });
        defender.anim({
          y: defender.y + 7,
          time: 100
        });
        defender.anim({
          y: defender.y - 2,
          time: 100
        });
        defender.anim({
          y: defender.y + 2,
          time: 100
        });
        defender.anim({
          y: defender.y,
          time: 100
        });
        scene.showEffect('rock3', {
          x: defender.x + 5,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 0
        }, {
          x: defender.x + 30,
          y: defender.y,
          scale: 0.4,
          opacity: 0,
          time: 350
        }, 'ballistic');
        scene.showEffect('rock3', {
          x: defender.x - 10,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 250
        }, {
          x: defender.x - 35,
          y: defender.y,
          scale: 0.3,
          opacity: 0,
          time: 600
        }, 'ballistic');
        scene.showEffect('rock3', {
          x: defender.x + 40,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 400
        }, {
          x: defender.x + 65,
          y: defender.y,
          scale: 0.3,
          opacity: 0,
          time: 750
        }, 'ballistic2');
        scene.showEffect('rock3', {
          x: defender.x,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.3,
          opacity: 1,
          time: 500
        }, {
          x: defender.x + 40,
          y: defender.y,
          scale: 0.4,
          opacity: 0,
          time: 750
        }, 'ballistic');
      }
    } },
    "eerieimpulse": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "electroshot": { anim(scene, [attacker, defender]) {
      let xstep = (defender.x - attacker.x) / 5;
      let ystep = (defender.x - 200 - attacker.x) / 5;
      let zstep = (defender.z - attacker.z) / 5;
      scene.backgroundEffect('#000000', 900, 0.5);
      for (let i = 0; i < 5; i++) {
        scene.showEffect('electroball', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + 200 + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 0.7,
          opacity: 0.6,
          time: 40 * i + 300
        }, {
          opacity: 0,
          time: 100 * i + 500
        }, 'linear', '', {
          filter: 'hue-rotate(120deg)'
        });
      }
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.75,
        opacity: 0.6
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 1.25,
        opacity: 0,
        time: 200
      }, 'decel', '', {
        filter: 'hue-rotate(120deg)'
      });
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 1.5,
        opacity: 0,
        time: 200
      }, 'decel');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode', {
        filter: 'hue-rotate(120deg)'
      });
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 425
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 625
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 450
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 650
      }, 'linear', 'explode', {
        filter: 'hue-rotate(120deg)'
      });
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 500
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 700
      }, 'linear', 'explode', {
        filter: 'hue-rotate(120deg)'
      });
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 575
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 775
      }, 'linear', 'explode');
    } },
    "electroweb": { anim(scene, [attacker, defender]) {
      scene.showEffect('web', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 400
      }, 'ballistic', 'explode');
      scene.showEffect('web', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 100
      }, {
        x: defender.x + 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'ballistic', 'explode');
      scene.showEffect('web', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 200
      }, {
        x: defender.x - 30,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 600
      }, 'ballistic', 'explode');
    } },
    "encore": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.x - 10,
        time: 100
      });
      attacker.anim({
        x: attacker.x + 10,
        time: 200
      });
      attacker.anim({
        x: attacker.x,
        time: 100
      });
    } },
    "endeavor": { anim(scene, [attacker, defender]) {
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 450
      }, {
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(20),
        scale: 0,
        opacity: 1,
        time: 750
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 750
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 0,
        opacity: 1,
        time: 1050
      }, 'linear', 'fade');
      BattleOtherAnims.xattack.anim(scene, [attacker, defender]);
    } },
    "endure": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "energyball": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.8,
        opacity: 0.3
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('energyball', {
        x: defender.x + 30,
        y: defender.y + 25,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6,
        time: 400
      }, {
        x: defender.x + 50,
        y: defender.y + 10,
        opacity: 0.3,
        time: 700
      }, 'accel', 'explode');
      scene.showEffect('energyball', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6,
        time: 500
      }, {
        x: defender.x - 50,
        y: defender.y - 20,
        opacity: 0.3,
        time: 700
      }, 'accel', 'explode');
      scene.showEffect('energyball', {
        x: defender.x + 15,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 600
      }, {
        x: defender.x + 35,
        y: defender.y + 30,
        opacity: 0.3,
        time: 800
      }, 'accel', 'explode');
      scene.showEffect('energyball', {
        x: defender.x - 15,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 600
      }, {
        x: defender.x - 35,
        y: defender.y - 40,
        opacity: 0.3,
        time: 800
      }, 'accel', 'explode');
      defender.delay(400);
      defender.anim({
        z: defender.behind(5),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "expandingforce": { anim(scene, [attacker, defender]) {
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 0.6,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 50
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 250
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 150
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 350
      }, 'linear', 'explode');
    } },
    "explosion": { anim(scene, [attacker]) {
      scene.showEffect('fireball', {
        x: attacker.x + 40,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.6
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
      scene.showEffect('fireball', {
        x: attacker.x - 40,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0,
        opacity: 0.6,
        time: 150
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
      scene.showEffect('fireball', {
        x: attacker.x + 10,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0,
        opacity: 0.6,
        time: 300
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
      attacker.delay(450).anim({
        scale: 4,
        time: 400,
        opacity: 0
      }, 'linear');
    } },
    "extrasensory": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#AA44BB', 250, 0.6);
      scene.backgroundEffect('#AA44FF', 250, 0.6, 400);
      defender.anim({
        scale: 1.2,
        time: 100
      });
      defender.anim({
        scale: 1,
        time: 100
      });
      defender.anim({
        scale: 1.4,
        time: 150
      });
      defender.anim({
        scale: 1,
        time: 150
      });
      scene.wait(700);
    } },
    "extremespeed": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.6,
        time: 600
      }, {
        x: attacker.x + 20,
        z: attacker.behind(-50),
        scale: 0.8,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.6,
        time: 600
      }, {
        x: attacker.x - 20,
        z: attacker.behind(-50),
        scale: 0.8,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('impact', {
        x: defender.x - 25,
        y: defender.y,
        z: defender.behind(5),
        scale: 0.7,
        opacity: 0.7,
        time: 375
      }, {
        scale: 1.2,
        opacity: 0,
        time: 650
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x + 25,
        y: defender.y - 5,
        z: defender.behind(5),
        scale: 0.7,
        opacity: 0.7,
        time: 500
      }, {
        scale: 1.2,
        opacity: 0,
        time: 775
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x - 25,
        y: defender.y + 10,
        z: defender.behind(5),
        scale: 0.7,
        opacity: 0.7,
        time: 600
      }, {
        scale: 1,
        opacity: 0,
        time: 850
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x + 2,
        y: defender.y + 5,
        z: defender.behind(5),
        scale: 1,
        opacity: 0.7,
        time: 600
      }, {
        scale: 1.5,
        opacity: 0,
        time: 975
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.5,
        time: 0
      }, {
        opacity: 0,
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.8,
        time: 400
      }, {
        z: attacker.behind(-100),
        opacity: 0,
        time: 475
      }, 'accel');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.8,
        time: 450
      }, {
        z: attacker.behind(-100),
        opacity: 0,
        time: 525
      }, 'accel');
      attacker.anim({
        opacity: 0,
        time: 50
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 50
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 50
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 50
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 50
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 50
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 50
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 50
      }, 'linear');
      attacker.anim({
        z: attacker.behind(-100),
        opacity: 0,
        time: 75
      }, 'accel');
      attacker.anim({
        z: attacker.behind(70),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.delay(600);
      attacker.anim({
        opacity: 1,
        time: 500
      }, 'decel');
      defender.delay(375);
      defender.anim({
        x: defender.leftof(5),
        z: defender.behind(20),
        time: 50
      });
      defender.anim({
        time: 75
      });
      defender.anim({
        z: defender.behind(20),
        time: 75
      });
      defender.anim({
        time: 75
      });
      defender.anim({
        x: defender.leftof(10),
        z: defender.behind(30),
        time: 250
      }, 'decel');
      defender.anim({
        time: 350
      }, 'swing');
    } },
    "facade": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear');
      defender.delay(480);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
    } },
    "fakeout": { anim(scene, [attacker, defender]) {
      scene.showEffect('rightchop', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.behind(-120),
        scale: 0.3,
        opacity: 0.1,
        time: 200
      }, {
        x: defender.x + 4,
        y: defender.y + 7,
        z: defender.behind(20),
        xscale: 0.15,
        yscale: 0.35,
        opacity: 1,
        time: 400
      }, 'accel', 'explode');
      scene.showEffect('leftchop', {
        x: defender.x - 15,
        y: defender.y,
        z: defender.behind(-120),
        scale: 0.3,
        opacity: 0.1,
        time: 200
      }, {
        x: defender.x - 4,
        y: defender.y + 7,
        z: defender.behind(20),
        xscale: 0.15,
        yscale: 0.35,
        opacity: 1,
        time: 400
      }, 'accel', 'explode');
      attacker.anim({
        x: attacker.leftof(-20),
        y: attacker.y,
        z: attacker.behind(-20),
        opacity: 0,
        time: 200
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-120),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(40),
        opacity: 1,
        time: 250
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 300
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        time: 300,
        opacity: 1
      }, 'linear');
      defender.delay(370);
      defender.anim({
        z: defender.behind(20),
        yscale: 1.4,
        xscale: 0.7,
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "ficklebeam": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 2,
        opacity: 0.3
      }, {
        scale: 0.3,
        opacity: 1,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 2,
        opacity: 0.3,
        time: 100
      }, {
        scale: 0.5,
        opacity: 0.6,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 0.5,
        opacity: 0.6,
        time: 400
      }, {
        time: 900
      }, 'accel', 'fade');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 0.4,
        opacity: 0.4,
        time: 400
      }, {
        time: 900
      }, 'accel', 'fade');
      for (let i = 0; i < 5; i++) {
        scene.showEffect('electroball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.behind(-30),
          scale: 0.5,
          opacity: 0.7,
          time: 100 * i + 400
        }, {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          opacity: 0.6,
          time: 100 * i + 400 + 200
        }, 'linear', 'fade');
        scene.showEffect('flareball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.behind(-30),
          scale: 0.4,
          opacity: 0.5,
          time: 100 * i + 400
        }, {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          opacity: 0.4,
          time: 100 * i + 400 + 200
        }, 'accel', 'fade');
      }
      defender.delay(600);
      defender.anim({
        z: defender.behind(5),
        time: 50
      }, 'swing');
      defender.anim({
        time: 50
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 50
      }, 'swing');
      defender.anim({
        time: 50
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 50
      }, 'swing');
      defender.anim({
        time: 50
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 50
      }, 'swing');
      defender.anim({
        time: 150
      }, 'swing');
    } },
    "fierydance": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#CC3300', 900, 0.3);
      defender.anim({
        x: defender.x - 5,
        time: 75
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
      for (let i = 0; i < 4; i++) {
        scene.showEffect('fireball', {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.5,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('fireball', {
          x: defender.x - 50,
          y: defender.y + 35,
          z: defender.z,
          scale: 0.5,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('fireball', {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.5,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('fireball', {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.5,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
      }
    } },
    "finalgambit": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.3,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        scale: 5,
        opacity: 0,
        time: 300
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        time: 300
      }, 'linear');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "fireblast": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 500, 0.7);
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.4, 500);
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 550
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y + 100,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 60,
        y: defender.y - 80,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x + 60,
        y: defender.y - 80,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 90,
        y: defender.y + 40,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x + 90,
        y: defender.y + 40,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      defender.delay(500);
      defender.anim({
        z: defender.behind(10),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "firefang": { anim(scene, [attacker, defender]) {
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 450
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 550
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 900
      }, 'linear');
      BattleOtherAnims.bite.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "firelash": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1100, 0.3);
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.5
      }, {
        scale: 2,
        opacity: 0,
        time: 300
      }, 'decel');
      scene.showEffect('rightslash', {
        x: defender.x + 5,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 800
      }, {
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('rightslash', {
        x: defender.x - 5,
        y: defender.y - 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 800
      }, {
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      attacker.delay(300);
      defender.delay(300);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "firepunch": { anim(scene, [attacker, defender]) {
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "firstimpression": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#987058', 600, 0.3, 400);
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 60,
        z: attacker.z,
        scale: 0.5,
        opacity: 1
      }, {
        scale: 0.25,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 100,
        z: attacker.z,
        scale: 0.5,
        xscale: 0.25,
        yscale: 0.75,
        opacity: 1
      }, {
        scale: 0.25,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y + 60,
        z: defender.z,
        scale: 0.5,
        opacity: 1
      }, {
        scale: 0.25,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y + 100,
        z: defender.z,
        scale: 0.5,
        xscale: 0.25,
        yscale: 0.75,
        opacity: 1
      }, {
        scale: 0.25,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 700
      }, {
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear');
      attacker.anim({
        y: attacker.y + 5,
        xscale: 0.9,
        yscale: 1.1,
        time: 100
      }, 'swing');
      attacker.anim({
        time: 100
      }, 'swing');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.anim({
        y: defender.y + 5,
        xscale: 0.9,
        yscale: 1.1,
        time: 100
      }, 'swing');
      defender.anim({
        time: 100
      }, 'swing');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "fishiousrend": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-15),
        scale: 1.5,
        opacity: 0.8,
        time: 400
      }, {
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      BattleOtherAnims.bite.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "flamecharge": { anim(scene, [attacker, defender]) {
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        x: attacker.x - 25,
        y: attacker.y - 25,
        scale: 2,
        opacity: 0,
        time: 300
      }, 'ballistic');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        x: attacker.x + 30,
        y: attacker.y - 20,
        scale: 2,
        opacity: 0,
        time: 450
      }, 'ballistic');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 250
      }, {
        x: attacker.x + 5,
        y: attacker.y - 40,
        scale: 2,
        opacity: 0,
        time: 550
      }, 'ballistic');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x - 20,
        y: attacker.y - 20,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'ballistic');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 600
      }, {
        scale: 5,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        scale: 8,
        opacity: 0,
        time: 1000
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(580);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "flamethrower": { anim(scene, [attacker, defender]) {
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 400
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 100
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 500
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 200
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 600
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 300
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 700
      }, 'decel', 'explode');
    } },
    "flareblitz": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.6);
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        scale: 8,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        scale: 8,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "flashcannon": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 0.6,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 50
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 250
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 150
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 350
      }, 'linear', 'explode');
    } },
    "fleurcannon": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#FF99FF', 700, 0.3);
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 275
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 225
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 425
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
    } },
    "flipturn": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-15),
        scale: 1.5,
        opacity: 0.8,
        time: 400
      }, {
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      BattleOtherAnims.spinattack.anim(scene, [attacker, defender]);
    } },
    "flowertrick": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`#000000`, 1000, 0.4);
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1
      }, {
        y: attacker.y + 90,
        opacity: 0
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y + 90,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 500
      }, {
        y: defender.y,
        opacity: 1,
        time: 1000
      }, 'linear', 'explode');
    } },
    "fly": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-200),
        y: attacker.y + 80,
        z: attacker.z,
        opacity: 0,
        time: 350
      }, 'accel');
      attacker.anim({
        x: defender.leftof(-200),
        y: defender.y + 80,
        z: defender.z,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'accel');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'linear');
      attacker.anim({
        x: defender.leftof(100),
        y: defender.y - 40,
        z: defender.z,
        opacity: 0,
        time: 175
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.behind(40),
        time: 1
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 250
      }, 'decel');
      defender.delay(700);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "focusblast": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#B84038', 700, 0.6);
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 3,
        opacity: 0.3
      }, {
        scale: 0.6,
        opacity: 1,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 3,
        opacity: 0.3,
        time: 100
      }, {
        scale: 0.8,
        opacity: 0.6,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 0.6,
        opacity: 0.8,
        time: 400
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        scale: 1,
        opacity: 0.8,
        time: 800
      }, 'accel', 'explode');
      defender.delay(800);
      defender.anim({
        z: defender.behind(10),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "focusenergy": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "foresight": { anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10
      });
      attacker.anim({
        x: attacker.x + 10
      });
      attacker.anim({
        x: attacker.x
      });
    } },
    "foulplay": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.6
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('purplewisp', {
        x: defender.x - 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 150
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('waterwisp', {
        x: defender.x + 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 300
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
    } },
    "freezedry": { anim(scene, [attacker, defender]) {
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 0.6,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 200
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 300
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 700
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.4,
        opacity: 0.3
      }, {
        x: defender.x + 10,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 3,
        opacity: 0.6,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.4,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y - 5,
        z: defender.behind(30),
        scale: 3,
        opacity: 0.6,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.4,
        opacity: 0.3,
        time: 200
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 3,
        opacity: 0.6,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.4,
        opacity: 0.3,
        time: 300
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 3,
        opacity: 0.6,
        time: 700
      }, 'linear', 'explode');
    } },
    "frostbreath": { anim(scene, [attacker, defender]) {
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 0.6,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 200
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 300
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 700
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.4,
        opacity: 0.3
      }, {
        x: defender.x + 10,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 3,
        opacity: 0.6,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.4,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y - 5,
        z: defender.behind(30),
        scale: 3,
        opacity: 0.6,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.4,
        opacity: 0.3,
        time: 200
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 3,
        opacity: 0.6,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.4,
        opacity: 0.3,
        time: 300
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 3,
        opacity: 0.6,
        time: 700
      }, 'linear', 'explode');
    } },
    "frustration": { anim(scene, [attacker, defender]) {
      scene.showEffect('angry', {
        x: attacker.x - 10,
        y: attacker.y + 50,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'ballistic2Under', 'fade');
      attacker.delay(300);
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 300
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(750);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(15),
        time: 300
      }, 'decel');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('foot', {
        x: defender.x - 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 650
      }, {
        x: defender.x - 15,
        y: defender.y + 10,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 950
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x - 5,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 675
      }, {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 875
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x + 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 900
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 725
      }, {
        x: defender.x + 30,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 925
      }, 'linear', 'explode');
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 1000
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 1300
      }, 'linear');
    } },
    "geargrind": { anim(scene, [attacker, defender]) {
      scene.showEffect('gear', {
        x: defender.x + 70,
        y: defender.y + 70,
        z: defender.z,
        scale: 0.65,
        opacity: 0,
        time: 450
      }, {
        x: defender.x + 20,
        y: defender.y,
        opacity: 1,
        time: 565
      }, 'linear', 'explode');
      scene.showEffect('gear', {
        x: defender.x - 70,
        y: defender.y - 70,
        z: defender.z,
        scale: 0.65,
        opacity: 0,
        time: 450
      }, {
        x: defender.x - 20,
        y: defender.y,
        opacity: 1,
        time: 565
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 550
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('gear', {
        x: defender.x + 70,
        y: defender.y - 70,
        z: defender.z,
        scale: 0.65,
        opacity: 0,
        time: 650
      }, {
        x: defender.x + 20,
        y: defender.y,
        opacity: 1,
        time: 765
      }, 'linear', 'explode');
      scene.showEffect('gear', {
        x: defender.x - 70,
        y: defender.y + 70,
        z: defender.z,
        scale: 0.65,
        opacity: 0,
        time: 650
      }, {
        x: defender.x - 20,
        y: defender.y,
        opacity: 1,
        time: 765
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 750
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 900
      }, 'linear');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        y: defender.y + 15,
        z: defender.behind(10),
        yscale: 1.3,
        time: 100
      }, 'swing');
      defender.anim({
        time: 100
      }, 'swing');
      defender.delay(225);
      defender.anim({
        x: defender.leftof(-10),
        y: defender.y + 15,
        z: defender.behind(5),
        yscale: 1.3,
        time: 100
      }, 'swing');
      defender.anim({
        time: 100
      }, 'swing');
    } },
    "gigadrain": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#9AB440', 900, 0.5);
      BattleOtherAnims.drain.anim(scene, [attacker, defender]);
    } },
    "gigatonhammer": { anim(scene, [attacker, defender]) {
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 450
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      defender.delay(450);
      defender.anim({
        y: defender.y - 30,
        z: defender.behind(20),
        yscale: 0.5,
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "glaiverush": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.6, 400);
      scene.showEffect('angry', {
        x: attacker.x - 10,
        y: attacker.y + 50,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        x: attacker.x - 50,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 300
      }, 'ballistic');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        x: attacker.x + 60,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 450
      }, 'ballistic');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x + 10,
        y: attacker.y - 60,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'ballistic');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 600
      }, {
        scale: 4,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 800
      }, {
        scale: 4,
        opacity: 0,
        time: 1100
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(580);
      defender.anim({
        z: defender.behind(20),
        time: 200
      }, 'decel');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "glare": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#AA0000', 250, 0.3);
      scene.backgroundEffect('#000000', 250, 0.2, 400);
      scene.showEffect('stare', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        yscale: 0,
        opacity: 1
      }, {
        yscale: 1,
        time: 700
      }, 'decel', 'fade');
    } },
    "grassknot": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x + 30,
        y: defender.y - 30,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 50
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('energyball', {
        x: defender.x - 30,
        y: defender.y - 40,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 200
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('leaf1', {
        x: defender.x + 30,
        y: defender.y - 30,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 50
      }, {
        y: defender.y - 40,
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('leaf2', {
        x: defender.x - 30,
        y: defender.y - 40,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 200
      }, {
        y: defender.y - 50,
        scale: 3,
        opacity: 0
      }, 'decel');
    } },
    "grassyglide": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 420
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 520
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('leaf1', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y - 60,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x + 60,
        y: defender.y,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y + 60,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf1', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 60,
        y: defender.y,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "growth": { anim(scene, [attacker]) {
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 0
      }, {
        y: attacker.y + 20,
        scale: 2,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 200
      }, {
        y: attacker.y + 20,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'accel');
      attacker.anim({
        scale: 1.25,
        time: 600
      }, 'linear');
      attacker.anim({
        time: 300
      }, 'accel');
    } },
    "gunkshot": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 275
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6,
        time: 225
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 425
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
    } },
    "gyroball": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic2');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "hammerarm": { anim(scene, [attacker, defender]) {
      scene.showEffect('fist1', {
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-15),
        scale: 1.2,
        opacity: 0.8,
        time: 400
      }, {
        y: defender.y - 10,
        z: defender.z,
        scale: 1.6,
        opacity: 1,
        time: 500
      }, 'accel', 'explode');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 450
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(20),
        time: 100
      });
      attacker.anim({
        time: 600
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        y: defender.y - 30,
        z: defender.behind(20),
        yscale: 0.5,
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "haze": { anim(scene, [attacker, defender]) {
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.backgroundEffect('#000000', 1000, 0.3);
      for (let i = 0; i < 4; i++) {
        scene.showEffect('blackwisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.5,
          opacity: 1
        }, {
          x: attacker.x + 120 * xf[i],
          y: attacker.y,
          z: attacker.z + 68 * yf[i],
          scale: 1,
          opacity: 0,
          time: 800
        }, 'decel', 'fade');
        scene.showEffect('blackwisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.5,
          opacity: 1
        }, {
          x: attacker.x + 113 * xf2[i],
          y: attacker.y,
          z: attacker.z + 97 * yf2[i],
          scale: 1,
          opacity: 0,
          time: 800
        }, 'decel', 'fade');
        scene.showEffect('blackwisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.5,
          opacity: 1
        }, {
          x: attacker.x + 120 * xf[i],
          y: attacker.y,
          z: attacker.z + 68 * yf[i],
          scale: 1,
          opacity: 0,
          time: 800
        }, 'decel', 'fade');
        scene.showEffect('blackwisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.5,
          opacity: 1
        }, {
          x: attacker.x + 113 * xf2[i],
          y: attacker.y,
          z: attacker.z + 97 * yf2[i],
          scale: 1,
          opacity: 0,
          time: 800
        }, 'decel', 'fade');
      }
    } },
    "headcharge": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.2);
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "headlongrush": { anim(scene, [attacker, defender]) {
    BattleMoveAnims['closecombat'].anim(scene, [attacker, defender]);
    BattleMoveAnims['earthpower'].anim(scene, [attacker, defender]);
  } },
    "headsmash": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.2);
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "healingwish": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1
      }, {
        x: attacker.x,
        y: attacker.y + 130,
        z: attacker.z,
        opacity: 0
      }, 'accel');
    } },
    "heartswap": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 400
      }, 'ballistic2Under');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 200
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 600
      }, 'ballistic2Under');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 600
      }, 'ballistic');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 800
      }, 'ballistic');
    } },
    "heatcrash": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.6);
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        scale: 8,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        scale: 8,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "heatwave": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(125);
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 150
        }, 'swing');
      }
      const defender = defenders[1] || defenders[0];
      scene.backgroundEffect('#CC3300', 900, 0.1);
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2.5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 150
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2.5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2.5,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "heavyslam": { anim(scene, [attacker, defender]) {
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 450
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(20),
        time: 100
      });
      attacker.anim({
        time: 600
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        y: defender.y - 30,
        z: defender.behind(20),
        yscale: 0.5,
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "hex": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      scene.showEffect('purplewisp', {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('purplewisp', {
        x: defender.x - 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('purplewisp', {
        x: defender.x + 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('bluefireball', {
        x: defender.x + 40,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.8,
        opacity: 0.5,
        time: 0
      }, {
        y: defender.y + 60,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect('bluefireball', {
        x: defender.x - 40,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.8,
        opacity: 0.5,
        time: 200
      }, {
        y: defender.y + 60,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y + 40,
        z: defender.z,
        scale: 0.8,
        opacity: 0.5,
        time: 400
      }, {
        y: defender.y + 60,
        opacity: 0,
        time: 800
      }, 'accel');
    } },
    "hiddenpower": { anim(scene, [attacker, defender]) {
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      for (let i = 0; i < 4; i++) {
        scene.showEffect('electroball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.5,
          opacity: 1
        }, {
          x: attacker.x + 240 * xf[i],
          y: attacker.y,
          z: attacker.z + 137 * yf[i],
          scale: 1,
          opacity: 0.5,
          time: 800
        }, 'accel', 'fade');
        scene.showEffect('electroball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.5,
          opacity: 1
        }, {
          x: attacker.x + 339 * xf2[i],
          y: attacker.y,
          z: attacker.z + 194 * yf2[i],
          scale: 1,
          opacity: 0.5,
          time: 800
        }, 'accel', 'fade');
      }
    } },
    "highhorsepower": { anim(scene, [attacker, defender]) {
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-15),
        scale: 1.5,
        opacity: 0.8,
        time: 400
      }, {
        y: defender.y - 10,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 600
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        y: defender.y - 30,
        z: defender.behind(20),
        yscale: 0.5,
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "highjumpkick": { anim(scene, [attacker, defender]) {
      scene.showEffect(attacker.sp, {
        x: defender.leftof(-10),
        y: attacker.y + 170,
        z: attacker.behind(-35),
        opacity: 0.3,
        time: 25
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(0)
      }, 'ballistic', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.leftof(-10),
        y: attacker.y + 170,
        z: attacker.behind(-35),
        opacity: 0.3,
        time: 75
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(0)
      }, 'ballistic', 'fade');
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.7,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 750
      }, 'linear', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y + 170,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 200
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(500);
      defender.anim({
        y: defender.y - 5,
        z: defender.behind(40),
        yscale: 0.9,
        time: 300
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "honeclaws": { anim(scene, [attacker]) {
      scene.showEffect('leftslash', {
        x: attacker.x - 10,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.3
      }, {
        opacity: 0,
        time: 300
      }, 'decel');
      scene.showEffect('rightslash', {
        x: attacker.x + 20,
        y: attacker.y - 15,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.3,
        time: 100
      }, {
        opacity: 0,
        time: 400
      }, 'decel');
      scene.showEffect('leftslash', {
        x: attacker.x - 5,
        y: attacker.y + 15,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.3,
        time: 200
      }, {
        opacity: 0,
        time: 500
      }, 'decel');
      scene.showEffect('rightslash', {
        x: attacker.x + 5,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.3,
        time: 200
      }, {
        opacity: 0,
        time: 500
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x - 10,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6
      }, {
        opacity: 0,
        time: 300
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 20,
        y: attacker.y - 15,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 100
      }, {
        opacity: 0,
        time: 400
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x - 5,
        y: attacker.y + 15,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 200
      }, {
        opacity: 0,
        time: 500
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 5,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 300
      }, {
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x + 20,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 0
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x - 20,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 800
      }, 'accel');
    } },
    "hornleech": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 600
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 900,
        opacity: 0
      }, 'ballistic2');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 650
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 950,
        opacity: 0
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 700
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 1000,
        opacity: 0
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-15),
        y: defender.y,
        z: defender.behind(15),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "hurricane": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 900, 0.6);
      for (let i = 0; i < 4; i++) {
        scene.showEffect('wisp', {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 50,
          y: defender.y + 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
      }
    } },
    "hydropump": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#0000DD', 700, 0.2);
      BattleOtherAnims.hydroshot.anim(scene, [attacker, defender]);
      defender.delay(200);
      defender.anim({
        z: defender.behind(20),
        time: 400
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "hypervoice": { anim(scene, [attacker]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 7,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "hypnosis": { anim(scene, [attacker, defender]) {
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.8,
        time: 0
      }, {
        scale: 2,
        opacity: 0,
        time: 400
      }, 'decel');
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.8,
        time: 100
      }, {
        scale: 2,
        opacity: 0,
        time: 500
      }, 'decel');
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.8,
        time: 200
      }, {
        scale: 2,
        opacity: 0,
        time: 600
      }, 'decel');
    } },
    "icebeam": { anim(scene, [attacker, defender]) {
      let xstep = (defender.x - attacker.x) / 5;
      let ystep = (defender.y - attacker.y) / 5;
      let zstep = (defender.z - attacker.z) / 5;
      for (let i = 0; i < 4; i++) {
        scene.showEffect('icicle', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 1.5,
          opacity: 0.6,
          time: 40 * i
        }, {
          opacity: 0,
          time: 40 * i + 600
        }, 'linear');
      }
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.5,
        time: 200
      }, {
        scale: 4,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 2,
        opacity: 0.5,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 650
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.5,
        time: 400
      }, {
        scale: 4,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
    } },
    "icefang": { anim(scene, [attacker, defender]) {
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 450
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 550
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 900
      }, 'linear');
      BattleOtherAnims.bite.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "icehammer": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#FFFFFF', 600, 0.3, 400);
      scene.showEffect('fist1', {
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-15),
        scale: 1.2,
        opacity: 0.8,
        time: 400
      }, {
        y: defender.y - 10,
        z: defender.z,
        scale: 1.6,
        opacity: 1,
        time: 500
      }, 'accel', 'explode');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 450
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 70,
        scale: 0.8,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        yscale: 1,
        opacity: 1,
        time: 450
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        yscale: 4,
        opacity: 0,
        time: 750
      }, 'linear');
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        yscale: 1,
        opacity: 1,
        time: 550
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        yscale: 4,
        opacity: 0,
        time: 850
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(20),
        time: 100
      });
      attacker.anim({
        time: 600
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        y: defender.y - 30,
        z: defender.behind(20),
        yscale: 0.5,
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "icepunch": { anim(scene, [attacker, defender]) {
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "iceshard": { anim(scene, [attacker, defender]) {
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.1,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.1,
        time: 200
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        time: 500
      }, 'linear', 'fade');
    } },
    "icespinner": { anim(scene, [attacker, defender]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.5,
        time: 0
      }, {
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        opacity: 0.8,
        time: 400
      }, 'decel', 'explode');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        scale: 2,
        opacity: 0.8,
        time: 400
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        opacity: 1,
        time: 500
      }, 'decel', 'explode');
      BattleOtherAnims.spinattack.anim(scene, [attacker, defender]);
    } },
    "iciclecrash": { anim(scene, [attacker, defender]) {
      scene.showEffect('icicle', {
        x: defender.x + 15,
        y: defender.y + 70,
        z: defender.z,
        opacity: 0,
        scale: 1
      }, {
        y: defender.y - 20,
        opacity: 1,
        xscale: 2,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: defender.x + 30,
        y: defender.y + 70,
        z: defender.z,
        opacity: 0,
        scale: 1,
        time: 100
      }, {
        y: defender.y - 20,
        opacity: 1,
        xscale: 2,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: defender.x - 30,
        y: defender.y + 70,
        z: defender.z,
        opacity: 0,
        scale: 1,
        time: 200
      }, {
        y: defender.y - 20,
        opacity: 1,
        xscale: 2,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y + 70,
        z: defender.z,
        opacity: 0,
        scale: 1,
        time: 300
      }, {
        y: defender.y - 20,
        opacity: 1,
        xscale: 2,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: defender.x - 15,
        y: defender.y + 70,
        z: defender.z,
        opacity: 0,
        scale: 1,
        time: 400
      }, {
        y: defender.y - 20,
        opacity: 1,
        xscale: 2,
        time: 700
      }, 'linear', 'explode');
    } },
    "iciclespear": { anim(scene, [attacker, defender]) {
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 375
      }, 'linear', 'fade');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 450
      }, 'linear', 'fade');
    } },
    "icywind": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        scene.showEffect('wisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 1.7,
          opacity: 0.3
        }, {
          x: defender.x + 10,
          y: defender.y + 5,
          z: defender.behind(30),
          scale: 2.5,
          opacity: 0.4,
          time: 400
        }, 'linear', 'explode');
        scene.showEffect('wisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 1.7,
          opacity: 0.3,
          time: 100
        }, {
          x: defender.x - 10,
          y: defender.y - 5,
          z: defender.behind(30),
          scale: 2.5,
          opacity: 0.4,
          time: 500
        }, 'linear', 'explode');
        scene.showEffect('wisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 1.7,
          opacity: 0.3,
          time: 200
        }, {
          x: defender.x,
          y: defender.y + 5,
          z: defender.behind(30),
          scale: 2.5,
          opacity: 0.4,
          time: 600
        }, 'linear', 'explode');
        scene.showEffect('wisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 1.7,
          opacity: 0.3,
          time: 300
        }, {
          x: defender.x,
          y: defender.y + 5,
          z: defender.behind(30),
          scale: 2.5,
          opacity: 0.4,
          time: 700
        }, 'linear', 'explode');
        scene.showEffect('icicle', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.2
        }, {
          x: defender.x,
          y: defender.y,
          z: defender.behind(20),
          opacity: 0.6,
          time: 400
        }, 'linear', 'fade');
        scene.showEffect('icicle', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.2,
          time: 200
        }, {
          x: defender.x - 10,
          y: defender.y + 5,
          z: defender.behind(20),
          opacity: 0.6,
          time: 600
        }, 'linear', 'fade');
        scene.showEffect('icicle', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.2,
          time: 300
        }, {
          x: defender.x,
          y: defender.y - 5,
          z: defender.behind(20),
          opacity: 0.6,
          time: 700
        }, 'linear', 'fade');
      }
    } },
    "infestation": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.6,
        time: 30
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 330
      }, 'linear', 'fade');
    } },
    "irondefense": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "ironhead": { anim(scene, [attacker, defender]) {
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.2,
        time: 450
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "irontail": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "ivycudgel": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 420
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 520
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('leaf1', {
        x: defender.x,
        y: defender.y - 40,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        scale: 1.25,
        opacity: 0.4,
        time: 700
      }, 'decel', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x - 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 600
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 1.25,
        opacity: 0.4,
        time: 800
      }, 'decel', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x + 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 1.25,
        opacity: 0.4,
        time: 900
      }, 'decel', 'fade');
      defender.delay(420);
      defender.anim({
        y: defender.y - 30,
        z: defender.behind(20),
        yscale: 0.5,
        time: 0
      }, 'swing');
      defender.anim({
        time: 480
      }, 'swing');
    } },
    "jumpkick": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.kick.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "junglehealing": { anim(scene, [attacker, ...defenders]) {
      scene.backgroundEffect('#9AB440', 1000, 0.3);
      for (const defender of defenders) {
        BattleOtherAnims.dance.anim(scene, [defender]);
        scene.showEffect('leaf1', {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 1,
          time: 500
        }, {
          x: defender.x,
          y: defender.y - 60,
          scale: 1.5,
          opacity: 0,
          time: 1100
        }, 'linear', 'fade');
        scene.showEffect('leaf2', {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 1,
          time: 500
        }, {
          x: defender.x + 60,
          y: defender.y,
          scale: 1.5,
          opacity: 0,
          time: 1100
        }, 'linear', 'fade');
        scene.showEffect('leaf2', {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 1,
          time: 500
        }, {
          x: defender.x,
          y: defender.y + 60,
          scale: 1.5,
          opacity: 0,
          time: 1100
        }, 'linear', 'fade');
        scene.showEffect('leaf1', {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 1,
          time: 500
        }, {
          x: defender.x - 60,
          y: defender.y,
          scale: 1.5,
          opacity: 0,
          time: 1100
        }, 'linear', 'fade');
      }
    } },
    "kingsshield": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "knockoff": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "kowtowcleave": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      scene.showEffect('rightslash', {
        x: defender.x + 5,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('rightslash', {
        x: defender.x - 5,
        y: defender.y - 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 600
      }, {
        scale: 3,
        opacity: 0,
        time: 900
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "lastrespects": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 900, 0.2);
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0
      }, {
        y: attacker.y + 600,
        yscale: 10,
        opacity: 0.3,
        time: 400
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.x,
        y: defender.y + 500,
        z: defender.z,
        yscale: 10,
        opacity: 0.3,
        time: 500
      }, {
        y: defender.y,
        opacity: 0,
        yscale: 1,
        time: 900
      }, 'decel', 'fade');
    } },
    "lavaplume": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        scene.showEffect('fireball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.1,
          opacity: 1
        }, {
          x: defender.x + 30,
          y: defender.y + 20,
          z: defender.z,
          scale: 1,
          opacity: 0.7
        }, 'ballistic', 'explode');
        scene.showEffect('fireball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.1,
          opacity: 1,
          time: 75
        }, {
          x: defender.x + 20,
          y: defender.y - 20,
          z: defender.z,
          scale: 1,
          opacity: 0.7
        }, 'ballistic', 'explode');
        scene.showEffect('fireball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.1,
          opacity: 1,
          time: 150
        }, {
          x: defender.x - 30,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 0.7
        }, 'ballistic', 'explode');
        scene.showEffect('fireball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.1,
          opacity: 1,
          time: 225
        }, {
          x: defender.x - 10,
          y: defender.y + 5,
          z: defender.z,
          scale: 1,
          opacity: 0.7
        }, 'ballistic', 'explode');
      }
    } },
    "leafblade": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.xattack.anim(scene, [attacker, defender]);
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 450
      }, {
        scale: 2,
        opacity: 0.2,
        time: 750
      }, 'linear', 'fade');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 750
      }, {
        scale: 2,
        opacity: 0.2,
        time: 1050
      }, 'linear', 'fade');
      scene.showEffect('leaf1', {
        x: defender.x - 35,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.5,
        opacity: 0.7,
        time: 450
      }, {
        scale: 3,
        opacity: 0,
        time: 750
      }, 'linear');
      scene.showEffect('leaf2', {
        x: defender.x + 35,
        y: defender.y - 15,
        z: defender.z,
        scale: 0.8,
        opacity: 0.7,
        time: 550
      }, {
        scale: 3.5,
        opacity: 0,
        time: 850
      }, 'linear');
      scene.showEffect('leftslash', {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 450
      }, {
        scale: 2,
        opacity: 0,
        time: 800
      }, 'accel', 'fade');
      scene.showEffect('leaf1', {
        x: defender.x - 35,
        y: defender.y - 15,
        z: defender.z,
        scale: 0.5,
        opacity: 0.7,
        time: 750
      }, {
        scale: 3,
        opacity: 0,
        time: 1050
      }, 'linear');
      scene.showEffect('leaf2', {
        x: defender.x + 35,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.8,
        opacity: 0.7,
        time: 800
      }, {
        scale: 3.5,
        opacity: 0,
        time: 1190
      }, 'linear');
      scene.showEffect('rightslash', {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 750
      }, {
        scale: 2,
        opacity: 0,
        time: 1100
      }, 'accel', 'fade');
    } },
    "leafstorm": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#9AB440', 700, 0.7);
      scene.showEffect('leaf1', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.1,
        opacity: 1
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 2,
        opacity: 0.6,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('leaf2', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.1,
        opacity: 1,
        time: 75
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 2,
        opacity: 0.6,
        time: 275
      }, 'linear', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('leaf2', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.1,
        opacity: 1,
        time: 225
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 2,
        opacity: 0.6,
        time: 425
      }, 'linear', 'explode');
      scene.showEffect('leaf1', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.1,
        opacity: 1,
        time: 300
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 2,
        opacity: 0.6,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
      defender.delay(125);
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 150
      }, 'swing');
    } },
    "leechlife": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#987058', 800, 0.3, 400);
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(50),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 600
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 900,
        opacity: 0
      }, 'ballistic2');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 650
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 950,
        opacity: 0
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 700
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 1000,
        opacity: 0
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "leechseed": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5
      }, {
        x: defender.x - 30,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6
      }, 'ballistic');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 125
      }, {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6
      }, 'ballistic');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 250
      }, {
        x: defender.x + 20,
        y: defender.y - 25,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6
      }, 'ballistic');
    } },
    "lightscreen": { anim() {} },
    "liquidation": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-15),
        scale: 1.5,
        opacity: 0.8,
        time: 400
      }, {
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x + 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        time: 500
      }, {
        x: defender.x - 50,
        scale: 0.6,
        opacity: 0.3,
        time: 800
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "lovelykiss": { anim(scene, [attacker, defender]) {
      scene.showEffect('heart', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0
      }, {
        x: defender.leftof(40),
        y: defender.y + 15,
        z: defender.z,
        scale: 0.7,
        opacity: 0.7,
        time: 500
      }, 'decel', 'fade');
      if (defender.isMissedPokemon) return;
      scene.showEffect('heart', {
        x: defender.leftof(40),
        y: defender.y + 15,
        z: defender.z,
        scale: 0.7,
        opacity: 0.7,
        time: 500
      }, {
        x: defender.leftof(-40),
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 700
      }, 'swing', 'fade');
      scene.showEffect('heart', {
        x: defender.leftof(-40),
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 0,
        time: 700
      }, {
        x: defender.leftof(10),
        y: defender.y - 15,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 900
      }, 'swing', 'explode');
    } },
    "lowkick": { anim(scene, [attacker, defender]) {
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 50,
        z: defender.behind(20),
        scale: 1.7,
        opacity: 0,
        time: 650
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-15),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "luminacrash": { anim(scene, [attacker, defender]) {
      for (let i = 0; i < 8; i++) {
        scene.showEffect(i % 2 === 0 ? 'purplewisp' : 'mistball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.4,
          opacity: 0.6,
          time: 0
        }, {
          x: attacker.x + (![0, 4].includes(i) ? 50 * (i > 4 ? -1 : 1) : 0),
          y: attacker.y + (![2, 6].includes(i) ? 50 * (i > 2 && i < 6 ? -1 : 1) : 0),
          z: attacker.z,
          opacity: 0,
          time: 500
        }, 'decel');
        scene.showEffect('feather', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.2,
          opacity: 0.6,
          time: 0
        }, {
          x: attacker.x + (![0, 4].includes(i) ? 50 * (i > 4 ? -1 : 1) : 0),
          y: attacker.y + (![2, 6].includes(i) ? 50 * (i > 2 && i < 6 ? -1 : 1) : 0),
          z: attacker.z,
          opacity: 0,
          time: 500
        }, 'decel');
        scene.showEffect(i % 2 === 0 ? 'purplewisp' : 'mistball', {
          x: attacker.x + (![0, 4].includes(i) ? 50 * (i > 4 ? -1 : 1) : 0),
          y: attacker.y + (![2, 6].includes(i) ? 50 * (i > 2 && i < 6 ? -1 : 1) : 0),
          z: attacker.z,
          scale: 0.4,
          opacity: 0.6,
          time: 500
        }, {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          time: 1000
        }, 'accel', 'explode');
        scene.showEffect('feather', {
          x: attacker.x + (![0, 4].includes(i) ? 50 * (i > 4 ? -1 : 1) : 0),
          y: attacker.y + (![2, 6].includes(i) ? 50 * (i > 2 && i < 6 ? -1 : 1) : 0),
          z: attacker.z,
          scale: 0.2,
          opacity: 0.6,
          time: 500
        }, {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          time: 1000
        }, 'accel', 'explode');
      }
    } },
    "lunardance": { anim(scene, [attacker]) {
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 800, 0.6);
      scene.showEffect('moon', {
        x: attacker.x,
        y: attacker.y + 150,
        z: attacker.z,
        scale: 1,
        opacity: 0,
        time: 200
      }, {
        opacity: 0.8,
        time: 900
      }, 'accel', 'fade');
      scene.showEffect('shine', {
        x: attacker.x + 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 200
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 600
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 300
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 700
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x + 20,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 400
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 800
      }, 'accel', 'fade');
      scene.showEffect('shine', {
        x: attacker.x - 20,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 500
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 900
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: 0,
        y: +175,
        z: +50,
        scale: 1.5,
        opacity: 1
      }, {
        time: 700
      }, 'accel', 'fade');
      scene.showEffect('iceball', {
        x: 0,
        y: +175,
        z: +50,
        scale: 0.5,
        opacity: 0.8
      }, {
        time: 700
      }, 'accel', 'fade');
    } },
    "lusterpurge": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#ffffff', 600, 0.6);
      scene.showEffect('wisp', {
        x: attacker.leftof(-10),
        y: attacker.y + 10,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5
      }, {
        scale: 15,
        opacity: 0.8,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('impact', {
        x: defender.x - 25,
        y: defender.y,
        z: defender.behind(5),
        scale: 0.7,
        opacity: 0.2,
        time: 175
      }, {
        scale: 1,
        opacity: 0,
        time: 375
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x + 25,
        y: defender.y - 5,
        z: defender.behind(5),
        scale: 0.7,
        opacity: 0.2,
        time: 300
      }, {
        scale: 1,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x - 25,
        y: defender.y + 10,
        z: defender.behind(5),
        scale: 0.7,
        opacity: 0.2,
        time: 400
      }, {
        scale: 1,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x + 2,
        y: defender.y + 5,
        z: defender.behind(5),
        scale: 1,
        opacity: 0.2,
        time: 500
      }, {
        scale: 1.25,
        opacity: 0,
        time: 700
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 75
      });
      attacker.delay(500);
      attacker.anim({
        opacity: 1,
        time: 100
      });
      defender.delay(200);
      defender.anim({
        x: defender.x - 30,
        time: 75
      });
      defender.anim({
        x: defender.x + 30,
        time: 100
      });
      defender.anim({
        x: defender.x - 30,
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
    } },
    "machpunch": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.fastattack.anim(scene, [attacker, defender]);
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 260
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "magiccoat": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "magmastorm": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#CC3300', 900, 0.3);
      defender.anim({
        x: defender.x - 5,
        time: 75
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
      for (let i = 0; i < 4; i++) {
        scene.showEffect('fireball', {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.5,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('fireball', {
          x: defender.x - 50,
          y: defender.y + 35,
          z: defender.z,
          scale: 0.5,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('fireball', {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.5,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('fireball', {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.5,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
      }
    } },
    "magnetrise": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x + 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 0
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x - 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 200
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 800
      }, 'accel');
    } },
    "makeitrain": { anim(scene, [attacker, ...defenders]) {
      scene.backgroundEffect('#000000', 1300, 0.2);
      for (const defender of defenders) {
        scene.showEffect('electroball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 2,
          opacity: 0
        }, {
          scale: 0,
          opacity: 1
        }, 'accel', 'explode');
        for (let i = 1; i <= 8; i++) {
          const hitPos = (-1) ** i * (32 - i * 8);
          scene.showEffect('electroball', {
            x: attacker.x,
            y: attacker.y,
            z: attacker.z,
            scale: 0.2,
            opacity: 0.7,
            time: 75 * i + 500
          }, {
            x: defender.x + hitPos,
            y: defender.y - hitPos,
            z: defender.z,
            scale: 0.4,
            opacity: 0.4,
            time: 75 * i + 700
          }, 'decel', 'explode');
          scene.showEffect('shine', {
            x: defender.x + hitPos,
            y: defender.y - hitPos,
            z: defender.z,
            scale: 0.5,
            opacity: 0.8,
            time: 75 * i + 700
          }, {
            opacity: 0,
            time: 75 * i + 800
          }, 'accel', 'fade');
        }
        defender.delay(700);
        for (let i = 1; i <= 3; i++) {
          defender.anim({
            z: defender.behind(5),
            time: 75
          }, 'swing');
          defender.anim({
            time: 75
          }, 'swing');
        }
        defender.anim({
          z: defender.behind(10),
          time: 100
        }, 'swing');
        defender.anim({
          time: 150
        }, 'swing');
      }
    } },
    "malignantchain": { anim(scene, [attacker, defender]) {
      attacker.anim({
        z: attacker.behind(15),
        time: 200
      }, 'decel');
      attacker.anim({
        z: defender.behind(-170),
        time: 100
      }, 'accel');
      attacker.anim({
        z: attacker.z,
        time: 300
      }, 'swing');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 275
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 500
      }, 'linear', '', {
        filter: 'hue-rotate(30deg) brightness(1.5)'
      });
      for (let i = 0; i < 5; i++) {
        scene.showEffect('shadowball', {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          scale: 0.5,
          opacity: 0.5,
          time: 550
        }, {
          x: defender.x + 30 * (i - 2),
          time: 950
        }, 'decel', 'fade', {
          filter: 'hue-rotate(30deg) brightness(1.5)'
        });
      }
      defender.delay(550);
      defender.anim({
        xscale: 0.6,
        time: 200
      });
      defender.delay(200);
      defender.anim({
        xscale: 1,
        time: 150
      });
      let x2 = [1, -1, -1, 1];
      let y2 = [1, 1, -1, -1];
      for (let i = 0; i < 4; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          scale: 0.7,
          time: 950
        }, {
          x: defender.x + x2[i] * 50,
          y: defender.y + y2[i] * 38,
          time: 1100
        }, 'ballistic', 'fade', {
          filter: 'hue-rotate(15deg)'
        });
      }
    } },
    "matchagotcha": { anim(scene, [attacker, ...defenders]) {
      for (let i = 0; i < 10; i++) {
        scene.showEffect('energyball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0,
          opacity: 1,
          time: 0
        }, {
          x: attacker.x + 100 / i,
          y: attacker.y + i * 10,
          scale: 1,
          opacity: 0,
          time: 300
        }, 'ballistic');
      }
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        x: attacker.x - 25,
        y: attacker.y - 25,
        scale: 2,
        opacity: 0,
        time: 300
      }, 'ballistic');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        x: attacker.x + 30,
        y: attacker.y - 20,
        scale: 2,
        opacity: 0,
        time: 450
      }, 'ballistic');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 250
      }, {
        x: attacker.x + 5,
        y: attacker.y - 40,
        scale: 2,
        opacity: 0,
        time: 550
      }, 'ballistic');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x - 20,
        y: attacker.y - 20,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'ballistic');
      for (const defender of defenders) {
        scene.showEffect('energyball', {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          scale: 0,
          opacity: 1,
          time: 600
        }, {
          scale: 5,
          opacity: 0,
          time: 900
        }, 'linear');
        scene.showEffect('energyball', {
          x: defender.x,
          y: defender.y,
          z: defender.z,
          scale: 0,
          opacity: 1,
          time: 700
        }, {
          scale: 8,
          opacity: 0,
          time: 1000
        }, 'linear');
        scene.showEffect('wisp', {
          x: defender.x + 30,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 1,
          time: 1010
        }, {
          y: defender.y + 60,
          opacity: 0.2,
          time: 1410
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 30,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 1,
          time: 1110
        }, {
          y: defender.y + 60,
          opacity: 0.2,
          time: 1510
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x + 15,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 1,
          time: 1210
        }, {
          y: defender.y + 60,
          opacity: 0.2,
          time: 1610
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 15,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 1,
          time: 1310
        }, {
          y: defender.y + 60,
          opacity: 0.2,
          time: 1710
        }, 'linear', 'fade');
      }
    } },
    "meanlook": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#AA0000', 250, 0.3);
      scene.backgroundEffect('#000000', 250, 0.2, 400);
      scene.showEffect('stare', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        yscale: 0,
        opacity: 1
      }, {
        yscale: 1,
        time: 700
      }, 'decel', 'fade');
    } },
    "megahorn": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#987058', 400, 0.3);
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 300
      }, {
        scale: 3,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "megakick": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.kick.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "memento": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 900, 0.2);
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0
      }, {
        y: attacker.y + 600,
        yscale: 10,
        opacity: 0.3,
        time: 400
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.x,
        y: defender.y + 500,
        z: defender.z,
        yscale: 10,
        opacity: 0.3,
        time: 500
      }, {
        y: defender.y,
        opacity: 0,
        yscale: 1,
        time: 900
      }, 'decel', 'fade');
    } },
    "metalburst": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 0.6,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 50
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 250
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 150
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 350
      }, 'linear', 'explode');
    } },
    "meteorbeam": { anim(scene, [attacker, defender]) {
      let xstep = (defender.x - attacker.x) / 5;
      let ystep = (defender.x - 200 - attacker.x) / 5;
      let zstep = (defender.z - attacker.z) / 5;
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 900, 0.6);
      for (let i = 0; i < 5; i++) {
        scene.showEffect('mudwisp', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + 200 + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 0.7,
          opacity: 0.6,
          time: 40 * i + 300
        }, {
          opacity: 0,
          time: 100 * i + 500
        }, 'linear');
      }
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.75,
        opacity: 0.6
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 1.25,
        opacity: 0,
        time: 200
      }, 'decel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 1.5,
        opacity: 0,
        time: 200
      }, 'decel');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 425
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 625
      }, 'linear', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 450
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 650
      }, 'linear', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 500
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 700
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 575
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 775
      }, 'linear', 'explode');
    } },
    "meteormash": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 1000, 0.4);
      scene.showEffect(attacker.sp, {
        x: attacker.leftof(20),
        y: attacker.y,
        z: attacker.behind(-25),
        opacity: 0.3,
        time: 25
      }, {
        x: defender.x,
        z: defender.behind(-5),
        opacity: 0,
        time: 425
      }, 'ballistic2Under');
      scene.showEffect(attacker.sp, {
        x: attacker.leftof(20),
        y: attacker.y,
        z: attacker.behind(-25),
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        z: defender.behind(-5),
        opacity: 0,
        time: 450
      }, 'ballistic2Under');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.7,
        time: 450
      }, {
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.7,
        time: 500
      }, {
        y: defender.y + 100,
        scale: 1,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.7,
        time: 500
      }, {
        x: defender.x - 60,
        y: defender.y - 80,
        scale: 1,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.7,
        time: 500
      }, {
        x: defender.x + 60,
        y: defender.y - 80,
        scale: 1,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.7,
        time: 500
      }, {
        x: defender.x - 90,
        y: defender.y + 40,
        scale: 1,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.7,
        time: 500
      }, {
        x: defender.x + 90,
        y: defender.y + 40,
        scale: 1,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      BattleOtherAnims.punchattack.anim(scene, [attacker, defender]);
    } },
    "milkdrink": { anim(scene, [defender]) {
      scene.showEffect('wisp', {
        x: defender.leftof(-25),
        y: defender.y + 40,
        z: defender.behind(-20),
        scale: 0.5,
        opacity: 1
      }, {
        x: defender.leftof(-15),
        y: defender.y + 35,
        z: defender.z,
        scale: 0,
        opacity: 0.2,
        time: 500
      }, 'swing', 'fade');
      defender.delay(400);
      defender.anim({
        y: defender.y + 5,
        yscale: 1.1,
        time: 200
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        y: defender.y + 5,
        yscale: 1.1,
        time: 200
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
    } },
    "mindblown": { anim(scene, [attacker, defender]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.3
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.6,
        time: 500
      }, 'ballistic', 'explode');
    } },
    "mirrorcoat": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 0.6,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 50
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 250
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 150
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 350
      }, 'linear', 'explode');
    } },
    "moonblast": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 800, 0.6);
      scene.showEffect('moon', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.9,
        opacity: 0.3
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.9,
        opacity: 0.6,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.3
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.6,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.3
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.8,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: 0,
        y: +175,
        z: +50,
        scale: 1.5,
        opacity: 1
      }, {
        time: 800
      }, 'accel', 'fade');
      scene.showEffect('iceball', {
        x: 0,
        y: +175,
        z: +50,
        scale: 0.5,
        opacity: 0.8
      }, {
        time: 800
      }, 'accel', 'fade');
      defender.delay(500);
      defender.anim({
        z: defender.behind(5),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "moonlight": { anim(scene, [attacker]) {
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 800, 0.6);
      scene.showEffect('moon', {
        x: attacker.x,
        y: attacker.y + 150,
        z: attacker.z,
        scale: 1,
        opacity: 0,
        time: 200
      }, {
        opacity: 0.8,
        time: 900
      }, 'accel', 'fade');
      scene.showEffect('shine', {
        x: attacker.x + 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 200
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 600
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 300
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 700
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x + 20,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 400
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 800
      }, 'accel', 'fade');
      scene.showEffect('shine', {
        x: attacker.x - 20,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 500
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 900
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: 0,
        y: +175,
        z: +50,
        scale: 1.5,
        opacity: 1
      }, {
        time: 700
      }, 'accel', 'fade');
      scene.showEffect('iceball', {
        x: 0,
        y: +175,
        z: +50,
        scale: 0.5,
        opacity: 0.8
      }, {
        time: 700
      }, 'accel', 'fade');
    } },
    "morningsun": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`url('${FX_BASE}weather-sunnyday.jpg')`, 700, 0.5);
      scene.showEffect('wisp', {
        x: attacker.x + 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 200
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 600
      }, 'accel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 300
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 700
      }, 'accel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 20,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 400
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 800
      }, 'accel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 20,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.8,
        time: 500
      }, {
        y: attacker.y + 130,
        opacity: 0,
        time: 900
      }, 'accel', 'fade');
    } },
    "mortalspin": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.5,
        time: 0
      }, {
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        opacity: 0.8,
        time: 400
      }, 'decel', 'explode');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        scale: 2,
        opacity: 0.8,
        time: 400
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        opacity: 1,
        time: 500
      }, 'decel', 'explode');
      BattleOtherAnims.spinattack.anim(scene, [attacker, defender]);
    } },
    "muddywater": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(125);
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
      }
      const defender = defenders[1] || defenders[0];
      scene.backgroundEffect('#996600', 700, 0.2);
      scene.showEffect('mudwisp', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(50),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('mudwisp', {
        x: attacker.x - 30,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x - 60,
        y: defender.y,
        z: defender.behind(50),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('mudwisp', {
        x: attacker.x + 30,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x + 60,
        y: defender.y,
        z: defender.behind(50),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
    } },
    "mudshot": { anim(scene, [attacker, defender]) {
      scene.showEffect('mudwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x + 10,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('mudwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3,
        time: 75
      }, {
        x: defender.x - 10,
        y: defender.y - 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('mudwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3,
        time: 150
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
    } },
    "mysticalfire": { anim(scene, [attacker, defender]) {
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 400
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 100
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 500
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 200
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 600
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 300
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 700
      }, 'decel', 'explode');
    } },
    "nastyplot": { anim(scene, [attacker]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      scene.showEffect('wisp', {
        x: attacker.x + 20,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 2,
        opacity: 1,
        time: 0
      }, {
        scale: 1,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x - 20,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 2,
        opacity: 1,
        time: 50
      }, {
        scale: 1,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 60,
        z: attacker.z,
        scale: 2,
        opacity: 1,
        time: 100
      }, {
        scale: 1,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.25,
        time: 750
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 70,
        z: attacker.z,
        scale: 0.5,
        xscale: 0.25,
        yscale: 0.75,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x,
        y: attacker.y + 80,
        z: attacker.z,
        scale: 0.25,
        time: 750
      }, 'decel', 'fade');
    } },
    "naturalgift": { anim(scene, [attacker, defender]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 3,
        opacity: 0.3
      }, {
        z: attacker.behind(-30),
        scale: 0.6,
        opacity: 1,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 3,
        opacity: 0.3,
        time: 100
      }, {
        z: attacker.behind(-30),
        scale: 0.8,
        opacity: 0.6,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 0.6,
        opacity: 0.8,
        time: 400
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        scale: 1,
        opacity: 0.8,
        time: 800
      }, 'accel', 'explode');
      defender.delay(800);
      defender.anim({
        z: defender.behind(5),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "naturepower": { anim() {} },
    "naturesmadness": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 800, 0.1);
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 1,
        xscale: 5,
        opacity: 0.6,
        time: 0
      }, {
        scale: 2,
        xscale: 8,
        opacity: 0.1,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 5,
        opacity: 0,
        time: 200
      }, {
        scale: 0.5,
        opacity: 0.6,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 5,
        opacity: 0,
        time: 350
      }, {
        scale: 0.5,
        opacity: 0.2,
        time: 800
      }, 'linear', 'fade');
    } },
    "nightdaze": { anim(scene, [attacker, defender]) {
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.backgroundEffect('#000000', 900, 0.3);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 1,
        xscale: 5,
        opacity: 0.8,
        time: 0
      }, {
        scale: 2,
        xscale: 8,
        opacity: 0.1,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 500
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      for (let i = 0; i < 4; i++) {
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.4
        }, {
          x: attacker.x + 240 * xf[i],
          y: attacker.y,
          z: attacker.z + 137 * yf[i],
          scale: 0.7,
          opacity: 0.4,
          time: 600
        }, 'accel', 'fade');
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.2,
          opacity: 0.4
        }, {
          x: attacker.x + 339 * xf2[i],
          y: attacker.y,
          z: attacker.z + 194 * yf2[i],
          scale: 0.5,
          opacity: 0.4,
          time: 600
        }, 'accel', 'fade');
      }
    } },
    "nightshade": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#550000', 250, 0.3);
      scene.backgroundEffect('#000000', 250, 0.2, 400);
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 3,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y + 35,
        z: defender.z,
        scale: 3.5,
        opacity: 0.1,
        time: 600
      }, 'accel', 'fade');
    } },
    "nightslash": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      scene.showEffect('rightslash', {
        x: defender.x + 5,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('rightslash', {
        x: defender.x - 5,
        y: defender.y - 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 600
      }, {
        scale: 3,
        opacity: 0,
        time: 900
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "nuzzle": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 450
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "outrage": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.6, 400);
      scene.showEffect('angry', {
        x: attacker.x - 10,
        y: attacker.y + 50,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        x: attacker.x - 50,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 300
      }, 'ballistic');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        x: attacker.x + 60,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 450
      }, 'ballistic');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x + 10,
        y: attacker.y - 60,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'ballistic');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 600
      }, {
        scale: 4,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 800
      }, {
        scale: 4,
        opacity: 0,
        time: 1100
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(580);
      defender.anim({
        z: defender.behind(20),
        time: 200
      }, 'decel');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "overdrive": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 0
      }, {
        scale: 8,
        opacity: 0.1,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 150
      }, {
        scale: 8,
        opacity: 0.1,
        time: 750
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 300
      }, {
        scale: 8,
        opacity: 0.1,
        time: 900
      }, 'linear', 'fade');
    } },
    "overheat": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 700, 0.4);
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8
      }, {
        x: defender.x + 60,
        y: defender.y + 40,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 75
      }, {
        x: defender.x + 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 150
      }, {
        x: defender.x - 60,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 225
      }, {
        x: defender.x - 20,
        y: defender.y + 10,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x + 30,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 100
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 30,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 200
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x + 15,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 300
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 15,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 800
      }, 'linear', 'fade');
      defender.delay(200);
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        time: 100
      }, 'accel');
    } },
    "painsplit": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 200
      }, {
        scale: 3,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 200
      }, {
        scale: 3,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "partingshot": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "perishsong": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "phantomforce": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1000, 0.3);
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 400
      }, {
        scale: 3,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 100
      }, 'linear');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 1,
        time: 450
      }, {
        x: defender.x,
        y: defender.y - 100,
        scale: 2,
        opacity: 0,
        time: 950
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 1,
        time: 450
      }, {
        x: defender.x - 60,
        y: defender.y + 80,
        scale: 2,
        opacity: 0,
        time: 950
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 1,
        time: 450
      }, {
        x: defender.x + 60,
        y: defender.y + 80,
        scale: 2,
        opacity: 0,
        time: 950
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 1,
        time: 450
      }, {
        x: defender.x - 90,
        y: defender.y - 40,
        scale: 2,
        opacity: 0,
        time: 950
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 1,
        time: 450
      }, {
        x: defender.x + 90,
        y: defender.y - 40,
        scale: 2,
        opacity: 0,
        time: 950
      }, 'linear', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-120),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 1,
        time: 350
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 300
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        time: 300,
        opacity: 1
      }, 'linear');
      defender.delay(380);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "photongeyser": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1000, 0.5);
      scene.backgroundEffect('#FFFFFF', 600, 0.8, 2100);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        scale: 0.6,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 1,
        time: 200
      }, {
        scale: 0.8,
        time: 600
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        scale: 1,
        time: 800
      }, 'decel', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0.5,
        time: 0
      }, {
        scale: 0.8,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.3,
        opacity: 1,
        time: 800
      }, {
        scale: 1.2,
        time: 1300
      }, 'linear', 'fade');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.3,
        opacity: 0.3,
        time: 800
      }, {
        scale: 1.2,
        time: 1300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 1.2,
        opacity: 0.8,
        time: 1300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 1500
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 1.2,
        opacity: 0.3,
        time: 1300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 1500
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.2,
        opacity: 1,
        time: 0
      }, {
        scale: 0.5,
        time: 1200
      }, 'decel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 2,
        opacity: 1,
        time: 900
      }, {
        time: 1200
      }, 'decel', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 2,
        opacity: 1,
        time: 1300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2.5,
        time: 1500
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y - 60,
        z: defender.z,
        scale: 0,
        xscale: 0,
        opacity: 0.5,
        time: 1500
      }, {
        scale: 2,
        xscale: 12,
        opacity: 0,
        time: 2500
      }, 'accel');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y + 350,
        z: defender.z,
        opacity: 1,
        scale: 8,
        xscale: 0,
        yscale: 13,
        time: 1500
      }, {
        xscale: 4,
        time: 2500
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        opacity: 1,
        scale: 2,
        time: 1500
      }, {
        scale: 6,
        time: 2500
      }, 'decel', 'explode');
      defender.delay(1500);
      defender.anim({
        z: defender.behind(10),
        opacity: 0,
        time: 200
      }, 'swing');
      defender.delay(700);
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "plasmafists": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`url('https://${Config.routes.client}/sprites/gen6bgs/bg-earthycave.jpg')`, 2000, 1);
      scene.backgroundEffect('#000000', 1000, 0.6);
      scene.backgroundEffect('#FFFFFF', 300, 0.6, 1000);
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.1,
        time: 0
      }, {
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 100
      }, {
        scale: 1,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.1,
        time: 200
      }, {
        scale: 0.5,
        opacity: 0.5,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        scale: 1,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.behind(-75),
        scale: 0.5,
        xscale: 0.25,
        yscale: 0.75,
        opacity: 0.5,
        time: 900
      }, {
        scale: 2,
        xscale: 3.5,
        opacity: 0.1
      }, 'decel', 'fade');
      scene.showEffect('fist1', {
        x: defender.x - 10,
        y: defender.y + 80,
        z: defender.behind(-70),
        scale: 0.8,
        opacity: 0.8,
        time: 800
      }, {
        y: defender.y - 15,
        z: defender.behind(-65),
        scale: 1,
        opacity: 1,
        time: 900
      }, 'accel', 'explode');
      scene.showEffect('fist1', {
        x: defender.x + 10,
        y: defender.y + 80,
        z: defender.behind(-70),
        scale: 0.8,
        opacity: 0.8,
        time: 800
      }, {
        y: defender.y - 15,
        z: defender.behind(-65),
        scale: 1,
        opacity: 1,
        time: 900
      }, 'accel', 'explode');
      scene.showEffect('lightning', {
        x: defender.x - 20,
        y: defender.y,
        z: defender.behind(-75),
        yscale: 0,
        xscale: 2,
        time: 900
      }, {
        x: defender.x,
        y: defender.y + 15,
        z: defender.behind(30),
        scale: 2,
        yscale: 1,
        xscale: 1.5,
        opacity: 1,
        time: 1200
      }, 'ballistic2Under', 'explode');
      scene.showEffect('lightning', {
        x: defender.x + 20,
        y: defender.y,
        z: defender.behind(-75),
        yscale: 0,
        xscale: 2,
        time: 1000
      }, {
        x: defender.x,
        y: defender.y + 15,
        z: defender.behind(30),
        scale: 2,
        yscale: 1,
        xscale: 1.5,
        opacity: 1,
        time: 1300
      }, 'linear', 'explode');
      scene.showEffect('lightning', {
        x: defender.x - 20,
        y: defender.y,
        z: defender.behind(-75),
        yscale: 0,
        xscale: 2,
        time: 1100
      }, {
        x: defender.x,
        y: defender.y + 15,
        z: defender.behind(30),
        scale: 2,
        yscale: 1,
        xscale: 1.5,
        opacity: 1,
        time: 1400
      }, 'ballistic2Under', 'explode');
      scene.showEffect('lightning', {
        x: defender.x + 20,
        y: defender.y,
        z: defender.behind(-75),
        yscale: 0,
        xscale: 2,
        time: 1200
      }, {
        x: defender.x,
        y: defender.y + 15,
        z: defender.behind(30),
        scale: 2,
        yscale: 1,
        xscale: 1.5,
        opacity: 1,
        time: 1500
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: defender.x - 10,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.75,
        time: 1050
      }, {
        scale: 2.5,
        opacity: 0,
        time: 1400
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x + 10,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.75,
        time: 1250
      }, {
        scale: 2.5,
        opacity: 0,
        time: 1600
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.75,
        time: 1450
      }, {
        scale: 2.5,
        opacity: 0,
        time: 1800
      }, 'linear');
      attacker.delay(400);
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-125),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(-75),
        time: 100
      });
      attacker.anim({
        time: 600
      }, 'ballistic2Back');
      defender.delay(1000);
      defender.anim({
        x: defender.x - 12.5,
        time: 75
      });
      defender.anim({
        x: defender.x + 12.5,
        time: 100
      });
      defender.anim({
        x: defender.x - 12.5,
        time: 100
      });
      defender.anim({
        x: defender.x + 12.5,
        time: 100
      });
      defender.anim({
        x: defender.x - 12.5,
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
    } },
    "playrough": { anim(scene, [attacker, defender]) {
      scene.showEffect('fist', {
        x: defender.x - 10,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 425
      }, {
        x: defender.x - 15,
        y: defender.y - 10,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 725
      }, 'linear');
      scene.showEffect('mudwisp', {
        x: defender.x - 5,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 450
      }, {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1,
        opacity: 0.8,
        time: 550
      }, 'linear', 'explode');
      scene.showEffect('mudwisp', {
        x: defender.x + 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 575
      }, {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 0.8,
        time: 675
      }, 'linear', 'explode');
      scene.showEffect('mudwisp', {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 600
      }, {
        x: defender.x + 30,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        opacity: 0.8,
        time: 700
      }, 'linear', 'explode');
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 750
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 1100
      }, 'linear');
      scene.showEffect('heart', {
        x: defender.x - 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 450
      }, {
        x: defender.x - 20,
        y: defender.y + 30,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 550
      }, 'linear', 'explode');
      scene.showEffect('heart', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 675
      }, {
        x: defender.x - 35,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 775
      }, 'linear', 'explode');
      scene.showEffect('heart', {
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 750
      }, {
        x: defender.x - 10,
        y: defender.y + 15,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 900
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 450
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.2,
        time: 750
      }, 'linear', 'fade');
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 750
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.2,
        time: 1050
      }, 'linear', 'fade');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 350
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 150
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "poisonjab": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(50),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(50),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(50),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "pollenpuff": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1300, 0.3);
      scene.showEffect('electroball', {
        x: attacker.x + 20,
        y: attacker.y - 60,
        z: attacker.behind(15),
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 150
      }, {
        scale: 1.5,
        xscale: 4,
        opacity: 0
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 20,
        y: attacker.y - 60,
        z: attacker.behind(15),
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 500
      }, {
        scale: 1.5,
        xscale: 4,
        opacity: 0
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y - 60,
        z: attacker.behind(15),
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 650
      }, {
        scale: 1.5,
        xscale: 4,
        opacity: 0
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-15),
        scale: 0.7,
        xscale: 1,
        opacity: 0.8,
        time: 900
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(5),
        time: 1100
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: defender.x + 30,
        y: defender.y + 25,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6,
        time: 1100
      }, {
        x: defender.x + 50,
        y: defender.y + 10,
        opacity: 0.3,
        time: 1400
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6,
        time: 1200
      }, {
        x: defender.x - 50,
        y: defender.y - 20,
        opacity: 0.3,
        time: 1400
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x + 15,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 1300
      }, {
        x: defender.x + 35,
        y: defender.y + 30,
        opacity: 0.3,
        time: 1500
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x - 15,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 1300
      }, {
        x: defender.x - 35,
        y: defender.y - 40,
        opacity: 0.3,
        time: 1500
      }, 'accel', 'explode');
      attacker.anim({
        x: attacker.x + 5,
        y: attacker.y + 10,
        time: 100
      }, 'ballistic');
      attacker.anim({
        x: attacker.x + 10,
        y: attacker.y,
        time: 50
      });
      attacker.anim({
        x: attacker.x - 5,
        y: attacker.y + 10,
        time: 200
      }, 'ballistic');
      attacker.anim({
        x: attacker.x - 10,
        y: attacker.y,
        time: 100
      });
      attacker.anim({
        x: attacker.x - 5,
        y: attacker.y + 10,
        time: 100
      }, 'ballistic');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        time: 50
      });
      attacker.anim({
        z: attacker.behind(15),
        time: 200
      }, 'decel');
      attacker.anim({
        z: attacker.behind(-15),
        time: 100
      }, 'accel');
      attacker.anim({
        z: attacker.z,
        time: 300
      }, 'swing');
      defender.delay(1100);
      defender.anim({
        z: defender.behind(15),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "poltergeist": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#440044 30%, #000000', 1500, 0.6);
      let xstep = (defender.x + 200 - defender.x) / 5;
      let ystep = (defender.x - 200 - defender.x) / 5;
      let zstep = defender.z / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x - 200 + xstep * (i + 1),
          y: defender.y + 200 + ystep * (i + 1),
          z: defender.z + zstep * (i + 1),
          scale: 0.6,
          opacity: 0.7,
          time: 40 * i + 0
        }, {
          opacity: 0,
          time: 50 * i + 1000
        }, 'linear');
      }
      xstep = (defender.x + 150 - defender.x) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x - 150 + xstep * (i + 1),
          y: defender.y + 200 + ystep * (i + 1),
          z: defender.z + zstep * (i + 1),
          scale: 0.6,
          opacity: 0.7,
          time: 40 * i + 100
        }, {
          opacity: 0,
          time: 50 * i + 1000
        }, 'linear');
      }
      xstep = (defender.x + 100 - defender.x) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x - 100 + xstep * (i + 1),
          y: defender.y + 200 + ystep * (i + 1),
          z: defender.z + zstep * (i + 1),
          scale: 1.2,
          opacity: 1,
          time: 40 * i + 200
        }, {
          opacity: 0,
          time: 50 * i + 1000
        }, 'linear');
      }
      xstep = (defender.x + 50 - defender.x) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x - 50 + xstep * (i + 1),
          y: defender.y + 200 + ystep * (i + 1),
          z: defender.z + zstep * (i + 1),
          scale: 0.6,
          opacity: 0.7,
          time: 40 * i + 300
        }, {
          opacity: 0,
          time: 50 * i + 1000
        }, 'linear');
      }
      xstep = (defender.x - 50 - defender.x) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x + 50 + xstep * (i + 1),
          y: defender.y + 200 + ystep * (i + 1),
          z: defender.z + zstep * (i + 1),
          scale: 1.2,
          opacity: 1,
          time: 40 * i + 400
        }, {
          opacity: 0,
          time: 50 * i + 1000
        }, 'linear');
      }
      xstep = (defender.x - 100 - defender.x) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x + 100 + xstep * (i + 1),
          y: defender.y + 200 + ystep * (i + 1),
          z: defender.z + zstep * (i + 1),
          scale: 0.6,
          opacity: 0.7,
          time: 40 * i + 500
        }, {
          opacity: 0,
          time: 50 * i + 1000
        }, 'linear');
      }
      xstep = (defender.x - 150 - defender.x) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x + 150 + xstep * (i + 1),
          y: defender.y + 200 + ystep * (i + 1),
          z: defender.z + zstep * (i + 1),
          scale: 0.6,
          opacity: 0.7,
          time: 40 * i + 600
        }, {
          opacity: 0,
          time: 50 * i + 1000
        }, 'linear');
      }
      xstep = (defender.x - 200 - defender.x) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('purplewisp', {
          x: defender.x + 200 + xstep * (i + 1),
          y: defender.y + 200 + ystep * (i + 1),
          z: defender.z + zstep * (i + 1),
          scale: 0.6,
          opacity: 0.7,
          time: 40 * i + 700
        }, {
          opacity: 0,
          time: 50 * i + 1000
        }, 'linear');
      }
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y - 60,
        z: defender.z,
        scale: 1,
        xscale: 3,
        opacity: 0.5,
        time: 200
      }, {
        scale: 3,
        xscale: 8,
        opacity: 0.1,
        time: 1300
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        opacity: 1,
        scale: 2,
        time: 200
      }, {
        scale: 2.5,
        opacity: 0,
        time: 1500
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.7,
        scale: 3,
        time: 200
      }, {
        scale: 9,
        opacity: 1,
        time: 1500
      }, 'linear', 'fade');
    } },
    "populationbomb": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
      scene.showEffect('fireball', {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.6
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
      scene.showEffect('leftslash', {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.6
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
      scene.showEffect('fireball', {
        x: defender.x - 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 150
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
      scene.showEffect('rightslash', {
        x: defender.x - 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 150
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
      scene.showEffect('fireball', {
        x: defender.x + 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 300
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
      scene.showEffect('leftslash', {
        x: defender.x + 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 300
      }, {
        scale: 6,
        opacity: 0
      }, 'decel');
    } },
    "powergem": { anim(scene, [attacker, defender]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y + 45,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.2
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.3,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x - 45,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.3,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x + 45,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.2,
        time: 200
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('shine', {
        x: attacker.x,
        y: attacker.y + 45,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.2
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.3,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('shine', {
        x: attacker.x - 45,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.3,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('shine', {
        x: attacker.x + 45,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.2,
        time: 200
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('iceball', {
        x: defender.x - 15,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 300
      }, {
        scale: 2,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('iceball', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 400
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 500
      }, {
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      defender.delay(325);
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 150
      }, 'swing');
    } },
    "poweruppunch": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-15),
        y: defender.y,
        z: defender.behind(15),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "powerwhip": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 420
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 520
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('leaf1', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y - 60,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x + 60,
        y: defender.y,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y + 60,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf1', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 60,
        y: defender.y,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "protect": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "psychic": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#AA44BB', 250, 0.6);
      scene.backgroundEffect('#AA44FF', 250, 0.6, 400);
      defender.anim({
        scale: 1.2,
        time: 100
      });
      defender.anim({
        scale: 1,
        time: 100
      });
      defender.anim({
        scale: 1.4,
        time: 150
      });
      defender.anim({
        scale: 1,
        time: 150
      });
      scene.wait(700);
    } },
    "psychicfangs": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#AA44BB', 450, 0.6, 450);
      BattleOtherAnims.bite.anim(scene, [attacker, defender]);
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        scale: 1.2,
        time: 100
      }, 'swing');
      defender.anim({
        scale: 1,
        time: 300
      });
    } },
    "psychicnoise": { anim(scene, [attacker, defender]) {
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.8,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 5,
        opacity: 0.1,
        time: 750
      }, 'linear');
      scene.showEffect('purplewisp', {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 900
      }, {
        scale: 2,
        opacity: 0
      }, 'decel');
      scene.showEffect('purplewisp', {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 1050
      }, {
        scale: 2,
        opacity: 0
      }, 'decel');
    } },
    "psychoboost": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.5
      }, {
        scale: 3,
        opacity: 0.3,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.8,
        opacity: 0.6,
        time: 100
      }, {
        scale: 3,
        opacity: 0.5,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.8,
        time: 400
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        scale: 1.25,
        time: 600
      }, 'accel', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.8,
        opacity: 0.6,
        time: 100
      }, {
        scale: 4,
        opacity: 0.5,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.5,
        opacity: 0.8,
        time: 400
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        scale: 1.5,
        opacity: 0.8,
        time: 600
      }, 'accel', 'explode');
      scene.showEffect('mistball', {
        x: defender.x + 30,
        y: defender.y + 25,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, {
        x: defender.x + 50,
        y: defender.y + 10,
        opacity: 0.5,
        time: 1000
      }, 'accel', 'explode');
      scene.showEffect('mistball', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 900
      }, {
        x: defender.x - 50,
        y: defender.y - 20,
        opacity: 0.5,
        time: 1100
      }, 'accel', 'explode');
      scene.showEffect('mistball', {
        x: defender.x + 15,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 900
      }, {
        x: defender.x + 35,
        y: defender.y + 30,
        opacity: 0.5,
        time: 1100
      }, 'accel', 'explode');
      scene.showEffect('mistball', {
        x: defender.x - 15,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, {
        x: defender.x - 35,
        y: defender.y - 40,
        opacity: 0.5,
        time: 1000
      }, 'accel', 'explode');
      attacker.delay(400);
      attacker.anim({
        z: attacker.behind(20),
        time: 300
      }, 'swing');
      attacker.anim({
        time: 300
      }, 'swing');
      defender.delay(600);
      defender.anim({
        z: defender.behind(10),
        time: 300
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "psychocut": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: defender.x + 60,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1
      }, {
        x: defender.x - 70,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 200
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x + 60,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 70,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x + 80,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 50,
        y: defender.y - 60,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 80,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        x: defender.x - 50,
        y: defender.y - 60,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 400
      }, 'linear', 'fade');
    } },
    "psyshock": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.6
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('purplewisp', {
        x: defender.x - 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 150
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('waterwisp', {
        x: defender.x + 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 300
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
    } },
    "psywave": { anim(scene, [attacker, defender]) {
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 0.6,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 50
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 250
      }, 'linear', 'explode');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 150
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 350
      }, 'linear', 'explode');
    } },
    "pursuit": { anim(scene, [attacker, defender]) {
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.behind(15),
        scale: 0,
        opacity: 0.2,
        time: 600
      }, {
        scale: 1.5,
        opacity: 0,
        time: 1000
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 300
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.leftof(5),
        y: defender.y,
        z: defender.behind(15),
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(15),
        time: 600
      }, 'accel');
      defender.delay(25);
      defender.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 400
      }, 'swing');
    } },
    "pyroball": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(280);
        defender.anim({
          z: defender.behind(20),
          time: 100
        }, 'swing');
        defender.anim({
          time: 300
        }, 'swing');
      }
      const defender = defenders[1] || defenders[0];
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.backgroundEffect('#000000', 600, 0.3);
      for (let i = 0; i < 4; i++) {
        scene.showEffect('flareball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.behind(-5),
          scale: 0.5,
          opacity: 1
        }, {
          x: defender.x + 240 * xf[i],
          y: defender.y,
          z: defender.z + 137 * yf[i],
          opacity: 0,
          time: 600
        }, 'decel');
        scene.showEffect('flareball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.behind(-5),
          scale: 0.5,
          opacity: 1
        }, {
          x: defender.x + 339 * xf2[i],
          y: defender.y + 10,
          z: defender.z + 194 * yf2[i],
          scale: 1,
          opacity: 0,
          time: 600
        }, 'decel');
      }
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 300
      }, 'linear', 'explode');
    } },
    "quickattack": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 260
      }, {
        scale: 2,
        opacity: 0,
        time: 560
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 310
      }, {
        scale: 2,
        opacity: 0,
        time: 610
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 300,
        opacity: 0.5
      }, 'accel');
      attacker.anim({
        x: defender.x,
        y: defender.x,
        z: defender.behind(100),
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(70),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 500
      }, 'decel');
      defender.delay(260);
      defender.anim({
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "quiverdance": { anim(scene, [attacker]) {
      scene.backgroundEffect('#987058', 800, 0.3, 400);
      BattleOtherAnims.shake.anim(scene, [attacker]);
      scene.showEffect('wisp', {
        x: attacker.x + 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 0
      }, {
        y: attacker.y + 60,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x - 40,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        y: attacker.y + 60,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 60,
        opacity: 0,
        time: 800
      }, 'accel');
    } },
    "ragefist": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 900, 0.3);
      scene.showEffect('angry', {
        x: attacker.x + 20,
        y: attacker.y + 10,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.7,
        time: 0
      }, {
        scale: 1.2,
        opacity: 1,
        time: 350
      }, 'ballistic2Under', 'fade');
      scene.showEffect('angry', {
        x: attacker.x - 20,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.7,
        time: 100
      }, {
        scale: 1.2,
        opacity: 1,
        time: 550
      }, 'ballistic2Under', 'fade');
      scene.showEffect('angry', {
        x: attacker.x,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.7,
        time: 250
      }, {
        scale: 1.2,
        opacity: 1,
        time: 700
      }, 'ballistic2Under', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.8,
        time: 150
      }, {
        scale: 2,
        opacity: 0,
        time: 1300
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x + 100,
        y: attacker.y + 60,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.3,
        opacity: 0,
        time: 600
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x - 90,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.6,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.4,
        opacity: 0,
        time: 675
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x + 70,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 300
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.3,
        opacity: 0,
        time: 750
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x - 80,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.6,
        time: 400
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.3,
        opacity: 0,
        time: 800
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 300
      }, {
        scale: 1,
        opacity: 0.5,
        time: 800
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.8,
        time: 750
      }, {
        scale: 2,
        opacity: 0,
        time: 1050
      }, 'decel');
      scene.backgroundEffect('#000000', 400, 0);
      attacker.delay(1100);
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-20),
        opacity: 0,
        time: 275
      }, 'linear');
      attacker.anim({
        time: 275
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 525
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.8,
        time: 1375
      }, {
        scale: 2,
        opacity: 0,
        time: 1950
      }, 'decel');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 1375
      }, {
        scale: 2,
        opacity: 0,
        time: 1850
      }, 'decel');
      defender.delay(1370);
      defender.anim({
        x: defender.leftof(15),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 500
      }, 'swing');
    } },
    "ragingfury": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.6, 400);
      scene.showEffect('angry', {
        x: attacker.x - 10,
        y: attacker.y + 50,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('blackwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        x: attacker.x - 50,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 300
      }, 'ballistic');
      scene.showEffect('blackwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        x: attacker.x + 60,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 450
      }, 'ballistic');
      scene.showEffect('blackwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x + 10,
        y: attacker.y - 60,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'ballistic');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 600
      }, {
        scale: 4,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 800
      }, {
        scale: 4,
        opacity: 0,
        time: 1100
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(580);
      defender.anim({
        z: defender.behind(20),
        time: 200
      }, 'decel');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "raindance": { anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10
      });
      attacker.anim({
        x: attacker.x + 10
      });
      attacker.anim({
        x: attacker.x
      });
    } },
    "rapidspin": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic2');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "razorshell": { anim(scene, [attacker, defender]) {
      scene.showEffect('iceball', {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 1000
      }, 'accel', 'fade');
      scene.showEffect('leftslash', {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 600
      }, {
        scale: 2,
        opacity: 0,
        time: 1000
      }, 'accel', 'fade');
      scene.showEffect('shell', {
        x: defender.x - 60,
        y: defender.y + 70,
        z: defender.z,
        scale: 0.75,
        opacity: 1,
        time: 400
      }, {
        x: defender.x + 60,
        y: defender.y - 70,
        scale: 0.6,
        opacity: 0,
        time: 700
      }, 'decel');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "recover": { anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x - 60,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 60,
        y: attacker.y - 5,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 30,
        y: attacker.y + 60,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 20,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 70,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 500
      }, 'linear', 'fade');
    } },
    "recycle": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "reflect": { anim() {} },
    "reflecttype": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 200
      }, {
        scale: 3,
        opacity: 0,
        time: 500
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 200
      }, {
        scale: 3,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "refresh": { anim(scene, [attacker]) {
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5
      }, {
        scale: 1.5,
        opacity: 0,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('rainbow', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1
      }, {
        scale: 2,
        opacity: 0,
        time: 500
      }, 'linear', 'fade');
    } },
    "rest": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1
      }, {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1.5,
        opacity: 1,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1.5,
        opacity: 1,
        time: 600
      }, 'ballistic2Under', 'fade');
    } },
    "return": { anim(scene, [attacker, defender]) {
      scene.showEffect('heart', {
        x: attacker.x - 10,
        y: attacker.y + 50,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'ballistic2Under', 'fade');
      attacker.delay(300);
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 300
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(750);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(15),
        time: 300
      }, 'decel');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('foot', {
        x: defender.x - 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 650
      }, {
        x: defender.x - 15,
        y: defender.y + 10,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 950
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x - 5,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 675
      }, {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 875
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x + 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 900
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 725
      }, {
        x: defender.x + 30,
        y: defender.y - 25,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 925
      }, 'linear', 'explode');
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 1000
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 1300
      }, 'linear');
    } },
    "revelationdance": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1300, 0.3);
      scene.showEffect('electroball', {
        x: attacker.x + 20,
        y: attacker.y - 60,
        z: attacker.behind(15),
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 150
      }, {
        scale: 1.5,
        xscale: 4,
        opacity: 0
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 20,
        y: attacker.y - 60,
        z: attacker.behind(15),
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 500
      }, {
        scale: 1.5,
        xscale: 4,
        opacity: 0
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y - 60,
        z: attacker.behind(15),
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 650
      }, {
        scale: 1.5,
        xscale: 4,
        opacity: 0
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-15),
        scale: 0.7,
        xscale: 1,
        opacity: 0.8,
        time: 900
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(5),
        time: 1100
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: defender.x + 30,
        y: defender.y + 25,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6,
        time: 1100
      }, {
        x: defender.x + 50,
        y: defender.y + 10,
        opacity: 0.3,
        time: 1400
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.2,
        opacity: 0.6,
        time: 1200
      }, {
        x: defender.x - 50,
        y: defender.y - 20,
        opacity: 0.3,
        time: 1400
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x + 15,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 1300
      }, {
        x: defender.x + 35,
        y: defender.y + 30,
        opacity: 0.3,
        time: 1500
      }, 'accel', 'explode');
      scene.showEffect('wisp', {
        x: defender.x - 15,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 1300
      }, {
        x: defender.x - 35,
        y: defender.y - 40,
        opacity: 0.3,
        time: 1500
      }, 'accel', 'explode');
      attacker.anim({
        x: attacker.x + 5,
        y: attacker.y + 10,
        time: 100
      }, 'ballistic');
      attacker.anim({
        x: attacker.x + 10,
        y: attacker.y,
        time: 50
      });
      attacker.anim({
        x: attacker.x - 5,
        y: attacker.y + 10,
        time: 200
      }, 'ballistic');
      attacker.anim({
        x: attacker.x - 10,
        y: attacker.y,
        time: 100
      });
      attacker.anim({
        x: attacker.x - 5,
        y: attacker.y + 10,
        time: 100
      }, 'ballistic');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        time: 50
      });
      attacker.anim({
        z: attacker.behind(15),
        time: 200
      }, 'decel');
      attacker.anim({
        z: attacker.behind(-15),
        time: 100
      }, 'accel');
      attacker.anim({
        z: attacker.z,
        time: 300
      }, 'swing');
      defender.delay(1100);
      defender.anim({
        z: defender.behind(15),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "reversal": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "roar": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "rockblast": { anim(scene, [attacker, defender]) {
      scene.showEffect('rock3', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.4
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 400
      }, 'linear', 'explode');
    } },
    "rockclimb": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "rockpolish": { anim(scene, [attacker]) {
      scene.showEffect('leftslash', {
        x: attacker.x - 10,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.3
      }, {
        opacity: 0,
        time: 300
      }, 'decel');
      scene.showEffect('rightslash', {
        x: attacker.x + 20,
        y: attacker.y - 15,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.3,
        time: 100
      }, {
        opacity: 0,
        time: 400
      }, 'decel');
      scene.showEffect('leftslash', {
        x: attacker.x - 5,
        y: attacker.y + 15,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.3,
        time: 200
      }, {
        opacity: 0,
        time: 500
      }, 'decel');
      scene.showEffect('rightslash', {
        x: attacker.x + 5,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.3,
        time: 200
      }, {
        opacity: 0,
        time: 500
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x - 10,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6
      }, {
        opacity: 0,
        time: 300
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 20,
        y: attacker.y - 15,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 100
      }, {
        opacity: 0,
        time: 400
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x - 5,
        y: attacker.y + 15,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 200
      }, {
        opacity: 0,
        time: 500
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 5,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 300
      }, {
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x + 20,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 0
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x - 20,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 800
      }, 'accel');
    } },
    "rockslide": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(200);
        defender.anim({
          y: defender.y - 7,
          yscale: 0.9,
          time: 100
        }, 'decel');
        defender.anim({
          time: 200
        });
        defender.delay(200);
        defender.anim({
          y: defender.y - 7,
          yscale: 0.9,
          time: 100
        }, 'decel');
        defender.anim({
          time: 200
        });
        scene.showEffect('rock1', {
          x: defender.x + 15,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 300
        }, 'accel', 'explode');
        scene.showEffect('rock2', {
          x: defender.x + 30,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5,
          time: 100
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 400
        }, 'accel', 'explode');
        scene.showEffect('rock1', {
          x: defender.x - 30,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5,
          time: 200
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 500
        }, 'accel', 'explode');
        scene.showEffect('rock2', {
          x: defender.x,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5,
          time: 300
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 600
        }, 'accel', 'explode');
        scene.showEffect('rock1', {
          x: defender.x - 15,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5,
          time: 400
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 700
        }, 'accel', 'explode');
        scene.showEffect('mudwisp', {
          x: defender.x + 40,
          y: defender.y - 40,
          z: defender.z,
          scale: 0,
          opacity: 0.4,
          time: 300
        }, {
          scale: 2,
          opacity: 0
        }, 'decel');
        scene.showEffect('mudwisp', {
          x: defender.x - 40,
          y: defender.y - 40,
          z: defender.z,
          scale: 0,
          opacity: 0.4,
          time: 450
        }, {
          scale: 2,
          opacity: 0
        }, 'decel');
        scene.showEffect('mudwisp', {
          x: defender.x + 10,
          y: defender.y - 40,
          z: defender.z,
          scale: 0,
          opacity: 0.4,
          time: 600
        }, {
          scale: 2,
          opacity: 0
        }, 'decel');
      }
    } },
    "rocktomb": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(200);
        defender.anim({
          y: defender.y - 7,
          yscale: 0.9,
          time: 100
        }, 'decel');
        defender.anim({
          time: 200
        });
        defender.delay(200);
        defender.anim({
          y: defender.y - 7,
          yscale: 0.9,
          time: 100
        }, 'decel');
        defender.anim({
          time: 200
        });
        scene.showEffect('rock1', {
          x: defender.x + 15,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 300
        }, 'accel', 'explode');
        scene.showEffect('rock2', {
          x: defender.x + 30,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5,
          time: 100
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 400
        }, 'accel', 'explode');
        scene.showEffect('rock1', {
          x: defender.x - 30,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5,
          time: 200
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 500
        }, 'accel', 'explode');
        scene.showEffect('rock2', {
          x: defender.x,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5,
          time: 300
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 600
        }, 'accel', 'explode');
        scene.showEffect('rock1', {
          x: defender.x - 15,
          y: defender.y + 100,
          z: defender.z,
          opacity: 0,
          scale: 0.5,
          time: 400
        }, {
          y: defender.y - 30,
          opacity: 1,
          time: 700
        }, 'accel', 'explode');
        scene.showEffect('mudwisp', {
          x: defender.x + 40,
          y: defender.y - 40,
          z: defender.z,
          scale: 0,
          opacity: 0.4,
          time: 300
        }, {
          scale: 2,
          opacity: 0
        }, 'decel');
        scene.showEffect('mudwisp', {
          x: defender.x - 40,
          y: defender.y - 40,
          z: defender.z,
          scale: 0,
          opacity: 0.4,
          time: 450
        }, {
          scale: 2,
          opacity: 0
        }, 'decel');
        scene.showEffect('mudwisp', {
          x: defender.x + 10,
          y: defender.y - 40,
          z: defender.z,
          scale: 0,
          opacity: 0.4,
          time: 600
        }, {
          scale: 2,
          opacity: 0
        }, 'decel');
      }
    } },
    "roost": { anim(scene, [attacker, defender]) {
      scene.showEffect('feather', {
        x: defender.x + 50,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 0
      }, {
        x: defender.x + 5,
        y: defender.y - 20,
        scale: 0.1,
        opacity: 0.4,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('feather', {
        x: defender.x - 50,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y - 20,
        scale: 0.1,
        opacity: 0.4,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('feather', {
        x: defender.x + 25,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 200
      }, {
        y: defender.y - 20,
        scale: 0.1,
        opacity: 0.4,
        time: 500
      }, 'ballistic2Under', 'fade');
      scene.showEffect('feather', {
        x: defender.x - 25,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 300
      }, {
        y: defender.y - 20,
        scale: 0.1,
        opacity: 0.4,
        time: 600
      }, 'ballistic2Under', 'fade');
    } },
    "ruination": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 800, 0.1);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 1,
        xscale: 5,
        opacity: 0.6,
        time: 0
      }, {
        scale: 2,
        xscale: 8,
        opacity: 0.1,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 5,
        opacity: 0,
        time: 200
      }, {
        scale: 0.5,
        opacity: 0.6,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 5,
        opacity: 0,
        time: 350
      }, {
        scale: 0.5,
        opacity: 0.2,
        time: 800
      }, 'linear', 'fade');
    } },
    "sacredfire": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#2630A9', 900, 0.6);
      scene.showEffect('bluefireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.z,
        scale: 1.5,
        opacity: 1,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('bluefireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 50
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.z,
        scale: 1.5,
        opacity: 1,
        time: 550
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.8,
        scale: 0,
        time: 550
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 4,
        opacity: 0.3,
        time: 850
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.8,
        scale: 0,
        time: 650
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 4,
        opacity: 0.3,
        time: 950
      }, 'linear', 'fade');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.6,
        opacity: 0.8,
        time: 550
      }, {
        x: defender.x + 60,
        y: defender.y - 20,
        z: defender.z,
        scale: 1.5,
        opacity: 0.5,
        time: 825
      }, 'decel', 'explode');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.6,
        opacity: 0.8,
        time: 575
      }, {
        x: defender.x - 50,
        y: defender.y - 20,
        z: defender.z,
        scale: 1,
        opacity: 0.5,
        time: 850
      }, 'decel', 'explode');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.6,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x - 60,
        y: defender.y + 20,
        z: defender.z,
        scale: 1.5,
        opacity: 0.5,
        time: 875
      }, 'decel', 'explode');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.6,
        opacity: 0.8,
        time: 625
      }, {
        x: defender.x + 50,
        y: defender.y + 30,
        z: defender.z,
        scale: 1.5,
        opacity: 0.5,
        time: 900
      }, 'decel', 'explode');
      scene.showEffect('bluefireball', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.6,
        opacity: 0.8,
        time: 650
      }, {
        x: defender.x - 10,
        y: defender.y + 60,
        z: defender.z,
        scale: 1.5,
        opacity: 0.5,
        time: 925
      }, 'decel', 'explode');
    } },
    "sacredsword": { anim(scene, [attacker, defender]) {
      attacker.delay(300);
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 300,
        opacity: 0.5
      }, 'accel');
      attacker.anim({
        x: defender.x,
        y: defender.x,
        z: defender.behind(100),
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(70),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 500
      }, 'decel');
      defender.delay(600);
      defender.anim({
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('sword', {
        x: attacker.leftof(-10),
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.5,
        opacity: 1
      }, {
        y: attacker.y + 10,
        scale: 1,
        opacity: 0.4,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: defender.x + 30,
        y: defender.y + 25,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 410
      }, {
        x: defender.x + 50,
        y: defender.y + 10,
        opacity: 0.5,
        time: 710
      }, 'accel', 'explode');
      scene.showEffect('iceball', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 510
      }, {
        x: defender.x - 50,
        y: defender.y - 20,
        opacity: 0.5,
        time: 710
      }, 'accel', 'explode');
      scene.showEffect('iceball', {
        x: defender.x + 15,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 610
      }, {
        x: defender.x + 35,
        y: defender.y + 30,
        opacity: 0.5,
        time: 810
      }, 'accel', 'explode');
      scene.showEffect('iceball', {
        x: defender.x - 15,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 610
      }, {
        x: defender.x - 35,
        y: defender.y - 40,
        opacity: 0.5,
        time: 910
      }, 'accel', 'explode');
      scene.showEffect('iceball', {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 610
      }, {
        scale: 2,
        opacity: 0,
        time: 910
      }, 'accel', 'fade');
      scene.showEffect('leftslash', {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 610
      }, {
        scale: 2,
        opacity: 0,
        time: 910
      }, 'accel', 'fade');
    } },
    "safeguard": { anim() {} },
    "saltcure": { anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.6
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('wisp', {
        x: defender.x - 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 150
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
      scene.showEffect('wisp', {
        x: defender.x + 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 300
      }, {
        scale: 3,
        opacity: 0
      }, 'decel');
    } },
    "scald": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.hydroshot.anim(scene, [attacker, defender]);
      scene.showEffect('wisp', {
        x: defender.x + 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 300
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 900
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x - 15,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 600
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 1000
      }, 'linear', 'fade');
    } },
    "scaleshot": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#440044', 700, 0.2);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-5),
        scale: 1,
        opacity: 0.5
      }, {
        z: attacker.behind(-10),
        scale: 6,
        opacity: 0
      }, 'linear');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 275
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 225
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 425
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 550
      }, {
        scale: 4,
        opacity: 0,
        time: 750
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 600
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      defender.delay(125);
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 150
      }, 'swing');
    } },
    "scorchingsands": { anim(scene, [attacker, defender]) {
      scene.$bg.animate({
        top: -90,
        bottom: 0
      }, 75).animate({
        top: -100,
        bottom: -10
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92.5,
        bottom: -2.5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92.5,
        bottom: -2.5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100);
      scene.showEffect('fireball', {
        x: defender.x + 10,
        y: defender.y - 35,
        z: defender.z,
        scale: 0,
        opacity: 0.8
      }, {
        scale: 3,
        opacity: 0
      }, 'linear');
      scene.showEffect('rock3', {
        x: defender.x + 10,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 0
      }, {
        x: defender.x + 30,
        y: defender.y + 50,
        scale: 0.5,
        opacity: 0,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x + 10,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 100
      }, {
        x: defender.x - 10,
        y: defender.y + 50,
        scale: 0.5,
        opacity: 0,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 200
      }, {
        x: defender.x + 35,
        y: defender.y + 50,
        scale: 0.5,
        opacity: 0,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x - 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0,
        opacity: 0.8,
        time: 150
      }, {
        scale: 3,
        opacity: 0
      }, 'linear');
      scene.showEffect('rock3', {
        x: defender.x - 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 60,
        y: defender.y + 45,
        scale: 0.5,
        opacity: 0,
        time: 450
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x - 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 250
      }, {
        x: defender.x - 20,
        y: defender.y + 45,
        scale: 0.5,
        opacity: 0,
        time: 550
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x - 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 350
      }, {
        x: defender.x - 35,
        y: defender.y + 45,
        scale: 0.5,
        opacity: 0,
        time: 650
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0,
        opacity: 0.8,
        time: 300
      }, {
        scale: 3,
        opacity: 0
      }, 'linear');
      scene.showEffect('rock3', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 60,
        y: defender.y + 65,
        scale: 0.5,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 400
      }, {
        x: defender.x + 20,
        y: defender.y + 65,
        scale: 0.5,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('rock3', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.4,
        opacity: 0.6,
        time: 500
      }, {
        x: defender.x + 30,
        y: defender.y + 65,
        scale: 0.5,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
      defender.delay(50);
      defender.anim({
        y: defender.y - 10,
        time: 75
      });
      defender.anim({
        y: defender.y + 10,
        time: 100
      });
      defender.anim({
        y: defender.y - 7,
        time: 100
      });
      defender.anim({
        y: defender.y + 7,
        time: 100
      });
      defender.anim({
        y: defender.y - 7,
        time: 100
      });
      defender.anim({
        y: defender.y + 7,
        time: 100
      });
      defender.anim({
        y: defender.y - 2,
        time: 100
      });
      defender.anim({
        y: defender.y + 2,
        time: 100
      });
      defender.anim({
        y: defender.y,
        time: 100
      });
    } },
    "secretsword": { anim(scene, [attacker, defender]) {
      defender.delay(400);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('sword', {
        x: attacker.leftof(-10),
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.5,
        opacity: 1
      }, {
        y: attacker.y + 10,
        scale: 1,
        opacity: 0.4,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('flareball', {
        x: defender.x + 30,
        y: defender.y + 25,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 400
      }, {
        x: defender.x + 50,
        y: defender.y + 10,
        opacity: 0.5,
        time: 700
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 50,
        y: defender.y - 20,
        opacity: 0.5,
        time: 700
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.x + 15,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 600
      }, {
        x: defender.x + 35,
        y: defender.y + 30,
        opacity: 0.5,
        time: 800
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.x - 15,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 600
      }, {
        x: defender.x - 35,
        y: defender.y - 40,
        opacity: 0.5,
        time: 800
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'accel', 'fade');
      scene.showEffect('leftslash', {
        x: defender.x - 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 500
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'accel', 'fade');
    } },
    "seedbomb": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 400
      }, 'ballistic', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 100
      }, {
        x: defender.x + 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 500
      }, 'ballistic', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 200
      }, {
        x: defender.x - 30,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 600
      }, 'ballistic', 'explode');
    } },
    "seedflare": { anim(scene, [attacker, defender]) {
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.4,
        time: 0
      }, {
        scale: 8,
        opacity: 0.1,
        time: 600
      }, 'linear', 'fade');
      for (let i = 0; i < 4; i++) {
        scene.showEffect('wisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.2,
          opacity: 1
        }, {
          x: attacker.x + 240 * xf[i],
          y: attacker.y,
          z: attacker.z + 137 * yf[i],
          scale: 0.3,
          opacity: 0.5,
          time: 800
        }, 'accel');
        scene.showEffect('wisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.2,
          opacity: 1
        }, {
          x: attacker.x + 339 * xf2[i],
          y: attacker.y,
          z: attacker.z + 194 * yf2[i],
          scale: 0.3,
          opacity: 0.5,
          time: 800
        }, 'accel');
      }
    } },
    "seismictoss": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 500, 0.6, 300);
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 400
      }, {
        scale: 3,
        opacity: 0,
        time: 600
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 350
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(5),
        time: 50
      }, 'ballistic2Under');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(380);
      defender.anim({
        y: defender.y + 100,
        z: defender.behind(5),
        opacity: 0.5,
        time: 300
      }, 'decel');
      defender.anim({
        time: 250
      }, 'accel');
      defender.anim({
        x: defender.x,
        y: defender.y - 35,
        yscale: 0.25,
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(1000);
    } },
    "shadowball": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1000, 0.1);
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y + 100,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 200
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x - 60,
        y: attacker.y - 80,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 50
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x + 60,
        y: attacker.y - 80,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x - 90,
        y: attacker.y + 40,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 150
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x + 90,
        y: attacker.y + 40,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 600
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0,
        time: 0
      }, {
        scale: 0.8,
        opacity: 0.5,
        time: 600
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0,
        time: 0
      }, {
        scale: 1.5,
        opacity: 0.8,
        time: 600
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.8,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 900
      }, 'accel', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 1.5,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        time: 900
      }, 'accel', 'explode');
      defender.delay(900);
      defender.anim({
        z: defender.behind(10),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "shadowclaw": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      BattleOtherAnims.clawattack.anim(scene, [attacker, defender]);
    } },
    "shadowpunch": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: attacker.leftof(-20),
        y: attacker.y,
        z: attacker.behind(-20),
        opacity: 0,
        time: 200
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-120),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(5),
        opacity: 1,
        time: 200
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-25),
        opacity: 0,
        time: 300
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        time: 300,
        opacity: 1
      }, 'linear');
      defender.delay(400);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "shadowsneak": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      BattleOtherAnims.sneakattack.anim(scene, [attacker, defender]);
    } },
    "sheercold": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`url('https://${Config.routes.client}/sprites/gen6bgs/bg-icecave.jpg')`, 1000, 0.6);
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        xscale: 2,
        yscale: 5,
        opacity: 0.6
      }, {
        xscale: 2.2,
        yscale: 5.25,
        scale: 0.6,
        time: 800
      }, 'linear', 'explode');
    } },
    "shellsmash": { anim(scene, [attacker]) {
      scene.showEffect('shell', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.5,
        time: 0
      }, {
        scale: 0.8,
        opacity: 0.8,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('impact', {
        x: attacker.x + 40,
        y: attacker.y,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.4,
        time: 400
      }, {
        scale: 1.2,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('impact', {
        x: attacker.x - 40,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.4,
        time: 450
      }, {
        scale: 1.2,
        opacity: 0,
        time: 650
      }, 'linear');
      scene.showEffect('impact', {
        x: attacker.x + 10,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.4,
        time: 560
      }, {
        scale: 1.2,
        opacity: 0,
        time: 700
      }, 'linear');
      attacker.anim({
        scale: 0.4,
        opacity: 0,
        time: 400
      }, 'linear');
      attacker.delay(75);
      attacker.anim({
        x: attacker.x - 20,
        time: 75
      });
      attacker.anim({
        x: attacker.x + 20,
        time: 100
      });
      attacker.anim({
        x: attacker.x - 20,
        time: 100
      });
      attacker.anim({
        x: attacker.x + 20,
        time: 100
      });
      attacker.anim({
        x: attacker.x - 20,
        time: 100
      });
      attacker.anim({
        x: attacker.x + 20,
        time: 100
      });
      attacker.anim({
        x: attacker.x,
        time: 75
      });
    } },
    "shiftgear": { anim(scene, [attacker]) {
      scene.showEffect('gear', {
        x: attacker.x + 50,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0,
        time: 100
      }, {
        x: attacker.x + 20,
        opacity: 1,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('gear', {
        x: attacker.x - 50,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0,
        time: 100
      }, {
        x: attacker.x - 20,
        opacity: 1,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('gear', {
        x: attacker.x + 50,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0,
        time: 250
      }, {
        x: attacker.x + 20,
        opacity: 1,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('gear', {
        x: attacker.x - 50,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0,
        time: 250
      }, {
        x: attacker.x - 20,
        opacity: 1,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('gear', {
        x: attacker.x + 50,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0,
        time: 400
      }, {
        x: attacker.x + 20,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('gear', {
        x: attacker.x - 50,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0,
        time: 400
      }, {
        x: attacker.x - 20,
        opacity: 1,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('shine', {
        x: attacker.x - 10,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 100
      }, {
        opacity: 0,
        time: 300
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 20,
        y: attacker.y - 15,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 100
      }, {
        opacity: 0,
        time: 400
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x - 5,
        y: attacker.y + 15,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 200
      }, {
        opacity: 0,
        time: 500
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 5,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.6,
        time: 300
      }, {
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x + 20,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x - 20,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('shine', {
        x: attacker.x,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 40,
        opacity: 0,
        time: 800
      }, 'accel');
      attacker.delay(100);
      attacker.anim({
        y: attacker.y + 2.5,
        yscale: 1.5,
        time: 100
      }, 'linear');
      attacker.anim({
        time: 100
      }, 'linear');
      attacker.anim({
        y: attacker.y + 2.5,
        yscale: 1.5,
        time: 100
      }, 'linear');
      attacker.anim({
        time: 100
      }, 'linear');
      attacker.anim({
        y: attacker.y + 2.5,
        yscale: 1.5,
        time: 100
      }, 'linear');
      attacker.anim({
        time: 100
      }, 'linear');
    } },
    "shoreup": { anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.1,
        time: 0
      }, {
        scale: 0,
        opacity: 0.5,
        time: 600
      }, 'linear');
    } },
    "signalbeam": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        opacity: 0.6,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 100
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 200
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.2,
        time: 300
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(20),
        opacity: 0.6,
        time: 700
      }, 'linear', 'explode');
    } },
    "skyattack": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-200),
        y: attacker.y + 80,
        z: attacker.z,
        opacity: 0,
        time: 350
      }, 'accel');
      attacker.anim({
        x: defender.leftof(-200),
        y: defender.y + 80,
        z: defender.z,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'accel');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'linear');
      attacker.anim({
        x: defender.leftof(100),
        y: defender.y - 40,
        z: defender.z,
        opacity: 0,
        time: 175
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.behind(40),
        time: 1
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 250
      }, 'decel');
      defender.delay(700);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "slackoff": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1
      }, {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1.5,
        opacity: 1,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1.5,
        opacity: 1,
        time: 600
      }, 'ballistic2Under', 'fade');
    } },
    "sleeppowder": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: defender.x + 10,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x + 30,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4,
        time: 150
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 650
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x - 30,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4,
        time: 300
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 800
      }, 'decel', 'fade');
    } },
    "sleeptalk": { anim() {} },
    "sludgebomb": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 400
      }, 'ballistic', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 100
      }, {
        x: defender.x + 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 500
      }, 'ballistic', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 200
      }, {
        x: defender.x - 30,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 600
      }, 'ballistic', 'explode');
    } },
    "sludgewave": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(125);
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
      }
      const defender = defenders[1] || defenders[0];
      scene.backgroundEffect('#AA00AA', 700, 0.2);
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.3
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(50),
        scale: 2,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x - 30,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.3
      }, {
        x: defender.x - 60,
        y: defender.y,
        z: defender.behind(50),
        scale: 2,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x + 30,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.3
      }, {
        x: defender.x + 60,
        y: defender.y,
        z: defender.behind(50),
        scale: 2,
        opacity: 0.6
      }, 'decel', 'explode');
    } },
    "smartstrike": { anim(scene, [attacker, defender]) {
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.5
      }, {
        opacity: 1,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('leftslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.5
      }, {
        opacity: 1,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1
      }, {
        opacity: 0.5,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 860
      }, {
        scale: 2,
        opacity: 0,
        time: 1160
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 910
      }, {
        scale: 2,
        opacity: 0,
        time: 1210
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 550
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 850
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 900
      }, 'accel', 'fade');
      attacker.delay(500);
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 300,
        opacity: 0.5
      }, 'accel');
      attacker.anim({
        x: defender.x,
        y: defender.x,
        z: defender.behind(100),
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(70),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 500
      }, 'decel');
      defender.delay(760);
      defender.anim({
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "snarl": { anim(scene, [attacker, defender]) {
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.4,
        time: 0
      }, {
        scale: 7,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.4,
        time: 150
      }, {
        scale: 7,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.4,
        time: 300
      }, {
        scale: 7,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "soak": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x + 10,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3,
        time: 75
      }, {
        x: defender.x - 10,
        y: defender.y - 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3,
        time: 150
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
    } },
    "softboiled": { anim(scene, [attacker]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.75,
        yscale: 1,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0.5,
        yscale: 0.75,
        opacity: 0.5,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        yscale: 1.5,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0.6,
        yscale: 0.75,
        opacity: 0.8,
        time: 400
      }, 'linear', 'explode');
    } },
    "solarbeam": { anim(scene, [attacker, defender]) {
      let xstep = (defender.x - attacker.x) / 5;
      let ystep = (defender.x - 200 - attacker.x) / 5;
      let zstep = (defender.z - attacker.z) / 5;
      scene.backgroundEffect(`url('${FX_BASE}weather-sunnyday.jpg')`, 900, 0.5);
      for (let i = 0; i < 5; i++) {
        scene.showEffect('energyball', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + 200 + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 0.7,
          opacity: 0.6,
          time: 40 * i + 300
        }, {
          opacity: 0,
          time: 100 * i + 500
        }, 'linear');
      }
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.75,
        opacity: 0.6
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 1.25,
        opacity: 0,
        time: 200
      }, 'decel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 1.5,
        opacity: 0,
        time: 200
      }, 'decel');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 425
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 625
      }, 'linear', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 450
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 650
      }, 'linear', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 500
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 700
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 575
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 775
      }, 'linear', 'explode');
    } },
    "sparklingaria": { anim(scene, [attacker, defender]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.7
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(0),
        opacity: 0.6,
        time: 400
      }, 'decel', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.7,
        time: 100
      }, {
        x: defender.x + 20,
        y: defender.y - 10,
        z: defender.behind(0),
        opacity: 0.6,
        time: 500
      }, 'decel', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.7,
        time: 200
      }, {
        x: defender.x - 20,
        y: defender.y + 10,
        z: defender.behind(0),
        opacity: 0.6,
        time: 600
      }, 'decel', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.7,
        time: 300
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 700
      }, 'decel', 'explode');
    } },
    "spectralthief": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#000000 30%, #440044', 1700, 0.5);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0.5,
        xscale: 0.5,
        yscale: 1,
        opacity: 0.5
      }, {
        scale: 2,
        xscale: 4,
        opacity: 0.1,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 1
      }, {
        x: attacker.x + 50,
        scale: 3,
        xscale: 3.5,
        opacity: 0.5,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 1
      }, {
        x: attacker.x - 50,
        scale: 3,
        xscale: 3.5,
        opacity: 0.5,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x - 50,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 2,
        opacity: 0.3,
        time: 300
      }, {
        x: defender.x - 50,
        y: defender.y - 40,
        z: defender.z,
        time: 900
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x - 50,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 2,
        opacity: 0.3,
        time: 400
      }, {
        x: defender.x - 50,
        y: defender.y - 40,
        z: defender.z,
        time: 900
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 2,
        opacity: 0.3,
        time: 450
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.z,
        time: 925
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 0,
        xscale: 0.5,
        yscale: 1,
        opacity: 0.5,
        time: 750
      }, {
        scale: 2,
        xscale: 4,
        opacity: 0.1,
        time: 1200
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 750
      }, {
        x: defender.x + 75,
        opacity: 1,
        scale: 3,
        time: 1200
      }, 'linear', 'explode');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 750
      }, {
        x: defender.x - 75,
        opacity: 1,
        scale: 3,
        time: 1200
      }, 'linear', 'explode');
      scene.showEffect(attacker.sp, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 3,
        opacity: 0.3,
        time: 700
      }, {
        y: defender.y + 600,
        yscale: 10,
        time: 1200
      }, 'linear', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.x + 30,
        y: defender.y,
        z: defender.z,
        scale: 3,
        opacity: 0.3,
        time: 800
      }, {
        y: defender.y + 600,
        yscale: 10,
        time: 1300
      }, 'linear', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 3,
        opacity: 0.3,
        time: 900
      }, {
        y: defender.y + 600,
        yscale: 10,
        time: 1400
      }, 'linear', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.x - 15,
        y: defender.y,
        z: defender.z,
        scale: 3,
        opacity: 0.3,
        time: 1000
      }, {
        y: defender.y + 600,
        yscale: 10,
        time: 1500
      }, 'linear', 'fade');
      scene.showEffect(attacker.sp, {
        x: defender.x - 15,
        y: defender.y,
        z: defender.z,
        scale: 3,
        opacity: 0.3,
        time: 1100
      }, {
        y: defender.y + 600,
        yscale: 10,
        time: 1600
      }, 'linear', 'fade');
      scene.showEffect('impact', {
        x: defender.x - 25,
        y: defender.y,
        z: defender.behind(5),
        scale: 0.6,
        opacity: 0.5,
        time: 700
      }, {
        scale: 1,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x + 25,
        y: defender.y - 5,
        z: defender.behind(5),
        scale: 0.6,
        opacity: 0.5,
        time: 800
      }, {
        scale: 1,
        opacity: 0,
        time: 1000
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x - 25,
        y: defender.y + 10,
        z: defender.behind(5),
        scale: 0.6,
        opacity: 0.5,
        time: 900
      }, {
        scale: 1,
        opacity: 0,
        time: 1100
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x + 2,
        y: defender.y + 5,
        z: defender.behind(5),
        scale: 0.6,
        opacity: 0.5,
        time: 1000
      }, {
        scale: 1,
        opacity: 0,
        time: 1200
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x - 20,
        y: defender.y - 5,
        z: defender.behind(5),
        scale: 0.6,
        opacity: 0.2,
        time: 1100
      }, {
        scale: 1,
        opacity: 0,
        time: 1300
      }, 'linear');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 1,
        time: 1700
      }, {
        x: attacker.x + 70,
        scale: 0.8,
        opacity: 0,
        time: 2200
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 1,
        time: 1700
      }, {
        x: attacker.x - 70,
        scale: 0.8,
        opacity: 0,
        time: 2200
      }, 'linear', 'fade');
      attacker.anim({
        opacity: 0,
        y: attacker.y - 40,
        time: 200
      }, 'swing');
      attacker.delay(1200);
      attacker.anim({
        opacity: 0,
        y: attacker.y + 60,
        time: 1
      });
      attacker.anim({
        time: 200
      }, 'swing');
      defender.delay(725);
      defender.anim({
        x: defender.x - 30,
        time: 75
      });
      defender.anim({
        x: defender.x + 30,
        time: 100
      });
      defender.anim({
        x: defender.x - 30,
        time: 100
      });
      defender.anim({
        x: defender.x + 30,
        time: 100
      });
      defender.anim({
        x: defender.x - 30,
        time: 100
      });
      defender.anim({
        x: defender.x + 30,
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
    } },
    "spikes": { anim(scene, [attacker, defender]) {
      scene.showEffect('caltrop', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5
      }, {
        x: -25,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.3,
        opacity: 1
      }, 'ballistic');
      scene.showEffect('caltrop', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 125
      }, {
        x: +50,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.3,
        opacity: 1
      }, 'ballistic');
      scene.showEffect('caltrop', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 250
      }, {
        x: +30,
        y: defender.y - 45,
        z: defender.z,
        scale: 0.3,
        opacity: 1
      }, 'ballistic');
    } },
    "spikyshield": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    } },
    "spiritbreak": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1000, 0.3);
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.4,
        time: 425,
        opacity: 0.2
      }, {
        scale: 0.6,
        time: 750,
        opacity: 1
      }, 'decel', 'fade');
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        time: 750,
        opacity: 1
      }, {
        time: 1000,
        scale: 2.5,
        opacity: 0.2
      }, 'decel', 'explode');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        time: 850,
        opacity: 0.4
      }, {
        time: 1000,
        scale: 3,
        opacity: 0.1
      }, 'decel', 'explode');
      scene.showEffect('shine', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 750,
        scale: 0.8
      }, {
        opacity: 0.4,
        time: 800
      }, 'decel', 'explode', {
        filter: 'invert(1)'
      });
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 875,
        scale: 0.8
      }, {
        opacity: 0.4,
        time: 925
      }, 'decel', 'explode', {
        filter: 'brightness(50%)'
      });
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(750);
      defender.anim({
        x: defender.leftof(15),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
    } },
    "spiritshackle": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#440044 30%, #000000', 1000, 0.4);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.5
      }, {
        scale: 3,
        opacity: 0
      }, 'linear');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 35,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.4,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.2,
        opacity: 0,
        time: 300
      }, 'decel');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y + 200,
        z: defender.behind(-10),
        opacity: 0.4,
        xscale: 0.1,
        yscale: 5,
        time: 575
      }, {
        y: defender.y + 150,
        z: defender.behind(-10),
        opacity: 0,
        time: 825
      }, 'decel');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        opacity: 0.4,
        xscale: 0.3,
        yscale: 0.1,
        time: 590
      }, {
        xscale: 0.6,
        yscale: 0.1,
        opacity: 0,
        time: 825
      }, 'linear', 'explode');
      defender.delay(825);
      defender.anim({
        z: defender.behind(5),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "spite": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1300, 0.3);
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 1,
        scale: 1
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.2,
        opacity: 0,
        time: 400
      }, 'decel');
      scene.showEffect(defender.sp, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        xscale: 1,
        time: 200
      }, {
        x: defender.x + 7,
        y: defender.y,
        z: defender.z,
        opacity: 0,
        xscale: 1.5,
        time: 800
      }, 'accel');
      scene.showEffect(defender.sp, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        xscale: 1,
        time: 700
      }, {
        x: defender.x - 7,
        y: defender.y,
        z: defender.z,
        opacity: 0,
        xscale: 1.5,
        time: 1300
      }, 'accel');
    } },
    "spore": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: defender.x + 10,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x + 30,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4,
        time: 150
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 650
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x - 30,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4,
        time: 300
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 800
      }, 'decel', 'fade');
    } },
    "stealthrock": { anim(scene, [attacker, defender]) {
      scene.showEffect('rock1', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5
      }, {
        x: defender.leftof(-40),
        y: defender.y - 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1
      }, 'ballistic');
      scene.showEffect('rock2', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 75
      }, {
        x: defender.leftof(-20),
        y: defender.y - 40,
        z: defender.z,
        scale: 0.2,
        opacity: 1
      }, 'ballistic');
      scene.showEffect('rock1', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 150
      }, {
        x: defender.leftof(30),
        y: defender.y - 20,
        z: defender.z,
        scale: 0.2,
        opacity: 1
      }, 'ballistic');
      scene.showEffect('rock2', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 225
      }, {
        x: defender.leftof(10),
        y: defender.y - 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1
      }, 'ballistic');
    } },
    "steameruption": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#0000DD', 700, 0.2);
      BattleOtherAnims.hydroshot.anim(scene, [attacker, defender]);
      defender.delay(200);
      defender.anim({
        z: defender.behind(20),
        time: 400
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('wisp', {
        x: defender.x + 30,
        y: defender.y,
        z: defender.behind(5),
        scale: 1,
        opacity: 1,
        time: 300
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x - 30,
        y: defender.y,
        z: defender.behind(10),
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.behind(15),
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 900
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x - 15,
        y: defender.y,
        z: defender.behind(20),
        scale: 1,
        opacity: 1,
        time: 600
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 1000
      }, 'linear', 'fade');
    } },
    "steelbeam": { anim(scene, [attacker, defender]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 400
      }, 'ballistic', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 100
      }, {
        x: defender.x + 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 500
      }, 'ballistic', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 200
      }, {
        x: defender.x - 30,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 600
      }, 'ballistic', 'explode');
    } },
    "steelwing": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-200),
        y: attacker.y + 80,
        z: attacker.z,
        opacity: 0,
        time: 350
      }, 'accel');
      attacker.anim({
        x: defender.leftof(-200),
        y: defender.y + 80,
        z: defender.z,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'accel');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'linear');
      attacker.anim({
        x: defender.leftof(100),
        y: defender.y - 40,
        z: defender.z,
        opacity: 0,
        time: 175
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.behind(40),
        time: 1
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 250
      }, 'decel');
      defender.delay(700);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "stickyweb": { anim(scene, [attacker, defender]) {
      scene.showEffect('web', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5
      }, {
        x: 0,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1
      }, 'ballistic');
    } },
    "stompingtantrum": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.anger.anim(scene, [attacker, defender]);
      attacker.anim({
        y: attacker.y + 20,
        time: 175
      }, 'swing');
      attacker.anim({
        y: attacker.y,
        time: 125
      }, 'accel');
      attacker.anim({
        y: attacker.y + 40,
        time: 175
      }, 'swing');
      attacker.anim({
        y: attacker.y,
        time: 75
      }, 'accel');
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.backgroundEffect('#000000', 1000, 0.3);
      for (let i = 0; i < 4; i++) {
        scene.showEffect('flareball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.8,
          time: 500
        }, {
          x: attacker.x + 120 * xf[i],
          y: attacker.y,
          z: attacker.z + 68 * yf[i],
          scale: 0.5,
          opacity: 0,
          time: 800
        }, 'decel', 'fade', {
          filter: 'hue-rotate(-15deg) brightness(0.5) saturate(0.7)'
        });
        scene.showEffect('flareball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.8,
          time: 500
        }, {
          x: attacker.x + 113 * xf2[i],
          y: attacker.y + 5,
          z: attacker.z + 97 * yf2[i],
          scale: 0.5,
          opacity: 0,
          time: 800
        }, 'decel', 'fade', {
          filter: 'hue-rotate(-15deg) brightness(0.5) saturate(0.7)'
        });
      }
      defender.delay(500);
      scene.showEffect('rock1', {
        x: defender.x,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, {
        x: defender.x,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.4,
        opacity: 0,
        time: 1100
      }, 'ballistic', 'fade');
      scene.showEffect('rock2', {
        x: defender.x + 20,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, {
        x: defender.x + 80,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.4,
        opacity: 0,
        time: 1100
      }, 'ballistic', 'fade');
      scene.showEffect('rock3', {
        x: defender.x - 20,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, {
        x: defender.x - 80,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.4,
        opacity: 0,
        time: 1100
      }, 'ballistic', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 550
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 850
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 900
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "stoneaxe": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.slashattack.anim(scene, [attacker, defender]);
      scene.showEffect('rock1', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.1,
        opacity: 0.5,
        time: 500
      }, {
        x: defender.x - 30,
        y: defender.y + 15,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, 'ballistic', 'fade');
      scene.showEffect('rock3', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.1,
        opacity: 0.5,
        time: 500
      }, {
        x: defender.x + 36,
        y: defender.y + 45,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, 'ballistic', 'fade');
      scene.showEffect('rock2', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.1,
        opacity: 0.5,
        time: 500
      }, {
        x: defender.x + 40,
        y: defender.y - 25,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, 'ballistic', 'fade');
      scene.showEffect('rock3', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.1,
        opacity: 0.5,
        time: 500
      }, {
        x: defender.x - 20,
        y: defender.y - 25,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 800
      }, 'ballistic', 'fade');
    } },
    "stoneedge": { anim(scene, [attacker, defender]) {
      scene.showEffect('rock3', {
        x: defender.x + 15,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.5
      }, {
        y: defender.y + 60,
        yscale: 1,
        opacity: 0,
        time: 350
      }, 'accel');
      scene.showEffect('rock3', {
        x: defender.x + 30,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.5,
        time: 150
      }, {
        y: defender.y + 60,
        yscale: 1,
        opacity: 0,
        time: 500
      }, 'accel');
      scene.showEffect('rock3', {
        x: defender.x - 30,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.5,
        time: 300
      }, {
        y: defender.y + 60,
        yscale: 1,
        opacity: 0,
        time: 650
      }, 'accel');
      scene.showEffect('rock3', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.5,
        time: 400
      }, {
        y: defender.y + 60,
        yscale: 1,
        opacity: 0,
        time: 750
      }, 'accel');
      scene.showEffect('rock3', {
        x: defender.x - 15,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.5,
        time: 500
      }, {
        y: defender.y + 60,
        yscale: 1,
        opacity: 0,
        time: 850
      }, 'accel');
    } },
    "storedpower": { anim(scene, [attacker, defender]) {
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      for (let i = 0; i < 4; i++) {
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.5,
          opacity: 1
        }, {
          x: attacker.x + 240 * xf[i],
          y: attacker.y,
          z: attacker.z + 137 * yf[i],
          scale: 1,
          opacity: 0.5,
          time: 800
        }, 'accel');
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.5,
          opacity: 1
        }, {
          x: attacker.x + 339 * xf2[i],
          y: attacker.y,
          z: attacker.z + 194 * yf2[i],
          scale: 1,
          opacity: 0.5,
          time: 800
        }, 'accel');
      }
    } },
    "strengthsap": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#987058', 800, 0.3, 400);
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(50),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 600
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 900,
        opacity: 0
      }, 'ballistic2');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 650
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 950,
        opacity: 0
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 700
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 1000,
        opacity: 0
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "stunspore": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: defender.x + 10,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x + 30,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4,
        time: 150
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 650
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x - 30,
        y: defender.y + 90,
        z: defender.z,
        opacity: 0,
        scale: 0.4,
        time: 300
      }, {
        y: defender.y - 5,
        opacity: 1,
        time: 800
      }, 'decel', 'fade');
    } },
    "substitute": { anim() {} },
    "suckerpunch": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.fastattack.anim(scene, [attacker, defender]);
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.behind(5),
        scale: 0,
        opacity: 0.3,
        time: 260
      }, {
        scale: 1.25,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "sunnyday": { anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10
      });
      attacker.anim({
        x: attacker.x + 10
      });
      attacker.anim({
        x: attacker.x
      });
    } },
    "superfang": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.bite.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "superpower": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 350
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 150
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 425
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 525
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x - 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 450
      }, {
        x: defender.x - 20,
        y: defender.y + 30,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 550
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x + 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 475
      }, {
        x: defender.x + 35,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 575
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x - 30,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 575
      }, {
        x: defender.x - 35,
        y: defender.y - 30,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 775
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 600
      }, {
        x: defender.x + 10,
        y: defender.y - 15,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 750
      }, 'linear', 'explode');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 650
      }, {
        x: defender.x - 10,
        y: defender.y + 15,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 800
      }, 'linear', 'explode');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 525
      }, {
        scale: 3,
        opacity: 0,
        time: 825
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 750
      }, {
        scale: 3,
        opacity: 0,
        time: 1050
      }, 'linear');
    } },
    "surf": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(125);
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
      }
      const defender = defenders[1] || defenders[0];
      scene.backgroundEffect('#0000DD', 700, 0.2);
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.behind(50),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x - 30,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x - 60,
        y: defender.y,
        z: defender.behind(50),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x + 30,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x + 60,
        y: defender.y,
        z: defender.behind(50),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
    } },
    "switcheroo": { anim(scene, [attacker, defender]) {
      scene.showEffect('pokeball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 0
      }, {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        time: 300
      }, 'ballistic2', 'fade');
      scene.showEffect('pokeball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('pokeball', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        time: 300
      }, {
        x: attacker.x - 50,
        y: attacker.y,
        z: attacker.z,
        time: 600
      }, 'ballistic2', 'fade');
      scene.showEffect('pokeball', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        time: 300
      }, {
        x: defender.x - 50,
        y: defender.y,
        z: defender.z,
        time: 600
      }, 'ballistic2Under', 'fade');
      scene.showEffect('pokeball', {
        x: attacker.x - 50,
        y: attacker.y,
        z: attacker.z,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 900
      }, 'ballistic2', 'explode');
      scene.showEffect('pokeball', {
        x: defender.x - 50,
        y: defender.y,
        z: defender.z,
        time: 600
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 900
      }, 'ballistic2Under', 'explode');
    } },
    "swordsdance": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.shake.anim(scene, [defender]);
      scene.showEffect('sword', {
        x: defender.x + 50,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1
      }, {
        x: defender.x - 50,
        scale: 1,
        opacity: 0.4,
        time: 200
      }, 'ballistic2', 'fade');
      scene.showEffect('sword', {
        x: defender.x - 50,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1
      }, {
        x: defender.x + 50,
        scale: 1,
        opacity: 0.4,
        time: 200
      }, 'ballistic2back', 'fade');
      scene.showEffect('sword', {
        x: defender.x + 50,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 200
      }, {
        x: defender.x - 50,
        scale: 1,
        opacity: 0.4,
        time: 400
      }, 'ballistic2', 'fade');
      scene.showEffect('sword', {
        x: defender.x - 50,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 200
      }, {
        x: defender.x + 50,
        scale: 1,
        opacity: 0.4,
        time: 400
      }, 'ballistic2back', 'fade');
      scene.showEffect('sword', {
        x: defender.x + 50,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 50,
        scale: 1,
        opacity: 0.4,
        time: 600
      }, 'ballistic2', 'fade');
      scene.showEffect('sword', {
        x: defender.x - 50,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 400
      }, {
        x: defender.x + 50,
        scale: 1,
        opacity: 0.4,
        time: 600
      }, 'ballistic2Back', 'fade');
    } },
    "synthesis": { anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x - 60,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 60,
        y: attacker.y - 5,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 30,
        y: attacker.y + 60,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 20,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 70,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 500
      }, 'linear', 'fade');
    } },
    "tachyoncutter": { anim(scene, [attacker, defender]) {
      defender.delay(400);
      defender.anim({
        z: defender.behind(15),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      scene.showEffect('waterwisp', {
        x: attacker.leftof(-10),
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.7,
        opacity: 1
      }, {
        y: attacker.y + 10,
        scale: 1.4,
        opacity: 0.2,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('sword', {
        x: attacker.leftof(-10),
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.5,
        opacity: 1
      }, {
        y: attacker.y + 10,
        scale: 1,
        opacity: 0.4,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 500,
        xscale: 1.2,
        yscale: 0.4,
        opacity: 0.8
      }, {
        time: 720,
        xscale: 1.4,
        yscale: 0.6,
        opacity: 0
      }, 'accel', 'explode', {
        rotate: '45deg'
      });
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 730,
        xscale: 1.2,
        yscale: 0.4,
        opacity: 0.8
      }, {
        time: 930,
        xscale: 1.4,
        yscale: 0.6,
        opacity: 0.4
      }, 'accel', 'explode', {
        rotate: '45deg'
      });
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 730,
        xscale: 1.2,
        yscale: 0.4,
        opacity: 0.8
      }, {
        time: 930,
        xscale: 1.4,
        yscale: 0.6,
        opacity: 0.4
      }, 'accel', 'explode', {
        rotate: '-45deg'
      });
      scene.showEffect('leftslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 500
      }, {
        scale: 2,
        opacity: 0,
        time: 720
      }, 'accel', 'fade', {
        filter: 'brightness(5)'
      });
      scene.showEffect('leftslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 730
      }, {
        scale: 2,
        opacity: 0,
        time: 930
      }, 'accel', 'fade', {
        filter: 'brightness(5)'
      });
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 0.6,
        time: 730
      }, {
        scale: 2,
        opacity: 0,
        time: 930
      }, 'accel', 'fade', {
        filter: 'brightness(5)'
      });
    } },
    "tailglow": { anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 1,
        opacity: 0.5,
        time: 400
      }, 'linear', 'explode');
    } },
    "tailslap": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "tailwind": { anim(scene, [attacker]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(40),
        scale: 0.3,
        opacity: 1
      }, {
        z: attacker.behind(-40),
        scale: 2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(40),
        scale: 0.3,
        opacity: 1,
        time: 200
      }, {
        z: attacker.behind(-40),
        scale: 2,
        opacity: 0.2,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(40),
        scale: 0.3,
        opacity: 1,
        time: 400
      }, {
        z: attacker.behind(-40),
        scale: 2,
        opacity: 0.2,
        time: 700
      }, 'linear', 'fade');
    } },
    "taunt": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.dance.anim(scene, [attacker, defender]);
      scene.showEffect('pointer', {
        x: attacker.x + 50,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.4,
        opacity: 1
      }, {
        x: attacker.x + 30,
        y: attacker.y + 35,
        scale: 0.5,
        xscale: 0.3,
        yscale: 0.6,
        opacity: 1,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('pointer', {
        x: attacker.x + 30,
        y: attacker.y + 35,
        z: attacker.z,
        scale: 0.5,
        xscale: 0.3,
        yscale: 0.6,
        opacity: 1,
        time: 400
      }, {
        x: attacker.x + 60,
        y: attacker.y + 30,
        scale: 0.4,
        xscale: 0.4,
        yscale: 0.4,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('angry', {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, {
        scale: 1,
        opacity: 1,
        time: 500
      }, 'ballistic2Under', 'fade');
      scene.showEffect('angry', {
        x: defender.x - 20,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 300
      }, {
        scale: 1,
        opacity: 1,
        time: 600
      }, 'ballistic2Under', 'fade');
      scene.showEffect('angry', {
        x: defender.x,
        y: defender.y + 40,
        z: defender.z,
        scale: 0.5,
        opacity: 0.5,
        time: 400
      }, {
        scale: 1,
        opacity: 1,
        time: 700
      }, 'ballistic2Under', 'fade');
    } },
    "teleport": { anim(scene, [attacker]) {
      scene.backgroundEffect('#000000', 1000, 0.3);
      attacker.anim({
        xscale: 0.3,
        time: 200
      }, 'linear');
      attacker.anim({
        y: attacker.y + 200,
        xscale: 0.1,
        yscale: 2,
        opacity: 0.5,
        time: 300
      }, 'accel');
      attacker.delay(500);
      attacker.anim({
        opacity: 0,
        time: 0
      });
      attacker.anim({
        opacity: 1,
        time: 300
      });
    } },
    "temperflare": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.anger.anim(scene, [attacker, defender]);
      attacker.anim({
        y: attacker.y + 20,
        time: 175
      }, 'swing');
      attacker.anim({
        y: attacker.y,
        time: 125
      }, 'accel');
      attacker.anim({
        y: attacker.y + 40,
        time: 175
      }, 'swing');
      attacker.anim({
        y: attacker.y,
        time: 75
      }, 'accel');
      defender.delay(500);
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 1000, 0.3);
      for (let i = 0; i < 4; i++) {
        scene.showEffect('flareball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.8,
          time: 500
        }, {
          x: attacker.x + 120 * xf[i],
          y: attacker.y,
          z: attacker.z + 68 * yf[i],
          scale: 0.5,
          opacity: 0,
          time: 800
        }, 'decel', 'fade', {
          filter: 'hue-rotate(-15deg)'
        });
        scene.showEffect('flareball', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.8,
          time: 500
        }, {
          x: attacker.x + 113 * xf2[i],
          y: attacker.y + 5,
          z: attacker.z + 97 * yf2[i],
          scale: 0.5,
          opacity: 0,
          time: 800
        }, 'decel', 'fade', {
          filter: 'hue-rotate(-15deg)'
        });
        scene.showEffect('blackwisp', {
          x: attacker.x + 120 * xf[i],
          y: attacker.y,
          z: attacker.z + 68 * yf[i],
          scale: 0.5,
          opacity: 0.5,
          time: 650
        }, {
          x: attacker.x + 120 * xf[i],
          y: attacker.y + 30,
          z: attacker.z + 68 * yf[i],
          scale: 0.5,
          opacity: 0,
          time: 950
        }, 'decel', 'explode');
      }
      scene.showEffect('fireball', {
        x: defender.x + 20,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.4,
        opacity: 1,
        time: 800
      }, {
        x: defender.x + 80,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.8,
        opacity: 0,
        time: 1100
      }, 'ballistic', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.4,
        opacity: 1,
        time: 800
      }, {
        x: defender.x,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.8,
        opacity: 0,
        time: 1100
      }, 'ballistic', 'fade');
      scene.showEffect('fireball', {
        x: defender.x - 20,
        y: defender.y - 5,
        z: defender.z,
        scale: 0.4,
        opacity: 1,
        time: 800
      }, {
        x: defender.x - 80,
        y: defender.y + 20,
        z: defender.z,
        scale: 0.8,
        opacity: 0,
        time: 1100
      }, 'ballistic', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "terablast": { anim(scene, [attacker, defender]) {
      BattleOtherAnims.hydroshot.anim(scene, [attacker, defender]);
      scene.showEffect('wisp', {
        x: defender.x + 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 300
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 900
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x - 15,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 600
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 1000
      }, 'linear', 'fade');
    } },
    "throatchop": { anim(scene, [attacker, defender]) {
      scene.showEffect('rightchop', {
        x: defender.leftof(30),
        y: defender.y + 50,
        z: defender.behind(-10),
        scale: 0.6,
        opacity: 1,
        time: 475
      }, {
        y: defender.y - 20,
        opacity: 0.5,
        time: 550
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "thunder": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#ffffff', 300, 0.7);
      scene.backgroundEffect('#000000', 1000, 0.7, 100);
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y + 150,
        z: defender.z,
        yscale: 0,
        xscale: 2
      }, {
        y: defender.y + 50,
        yscale: 1,
        xscale: 1.5,
        opacity: 0,
        time: 200
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y + 50,
        z: defender.z,
        yscale: 1,
        xscale: 1.5,
        time: 200
      }, {
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y + 50,
        z: defender.z,
        yscale: 1,
        xscale: 1.5,
        time: 600
      }, {
        opacity: 0,
        time: 1100
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y - 60,
        z: defender.z,
        scale: 1,
        xscale: 1.5,
        opacity: 0.5,
        time: 200
      }, {
        scale: 2,
        xscale: 4,
        opacity: 0.1,
        time: 900
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        opacity: 0.5,
        scale: 1.5,
        time: 200
      }, {
        scale: 1.8,
        opacity: 0.1,
        time: 900
      }, 'linear', 'fade');
      defender.delay(200);
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        time: 100
      }, 'accel');
    } },
    "thunderbolt": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 600, 0.2);
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y + 150,
        z: defender.z,
        yscale: 0,
        xscale: 2
      }, {
        y: defender.y + 50,
        yscale: 1,
        xscale: 1.5,
        opacity: 0.8,
        time: 200
      }, 'linear', 'fade');
      scene.showEffect('lightning', {
        x: defender.x - 15,
        y: defender.y + 150,
        z: defender.z,
        yscale: 0,
        xscale: 2,
        time: 200
      }, {
        y: defender.y + 50,
        yscale: 1,
        xscale: 1.5,
        opacity: 0.8,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('lightning', {
        x: defender.x + 15,
        y: defender.y + 150,
        z: defender.z,
        yscale: 0,
        xscale: 2,
        time: 400
      }, {
        y: defender.y + 50,
        yscale: 1,
        xscale: 1.5,
        opacity: 0.8,
        time: 600
      }, 'linear', 'fade');
    } },
    "thundercage": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#ffffff', 300, 0.7);
      scene.backgroundEffect('#000000', 1000, 0.7, 100);
      defender.anim({
        x: defender.x - 5,
        time: 75
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x - 5,
        time: 100
      });
      defender.anim({
        x: defender.x + 5,
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
      for (let i = 0; i < 4; i++) {
        scene.showEffect('lightning', {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.3,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('lightning', {
          x: defender.x - 50,
          y: defender.y + 35,
          z: defender.z,
          scale: 0.3,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('lightning', {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.3,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('lightning', {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.3,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 1,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
      }
    } },
    "thunderclap": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 200, 0.2);
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.8
      }, {
        scale: 3,
        opacity: 0.2,
        time: 200
      }, 'accel', 'fade', {
        filter: 'hue-rotate(150deg)'
      });
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y + 150,
        z: defender.z,
        yscale: 0,
        xscale: 2,
        time: 200
      }, {
        y: defender.y + 50,
        yscale: 1,
        xscale: 1.5,
        opacity: 0.8,
        time: 400
      }, 'linear', 'fade', {
        filter: 'hue-rotate(180deg)'
      });
    } },
    "thunderfang": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 450
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 550
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 900
      }, 'linear');
      BattleOtherAnims.bite.anim(scene, [attacker, defender]);
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "thunderpunch": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "thunderwave": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 0
      }, {
        scale: 8,
        opacity: 0.1,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 200
      }, {
        scale: 8,
        opacity: 0.1,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.2,
        time: 500
      }, {
        scale: 4,
        opacity: 0.1,
        time: 800
      }, 'linear', 'fade');
    } },
    "tidyup": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1,
        time: 500
      }, {
        x: attacker.leftof(-30),
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1,
        opacity: 0.3,
        time: 800
      }, 'ballistic2Under', 'fade');
      attacker.anim({
        y: attacker.y + 4,
        scale: 1.15,
        time: 200
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        time: 200
      }, 'decel');
    } },
    "torchsong": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#FFC001', 800, 0.3, 200);
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.8,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 200
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.8,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 200
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.8,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 225
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 200
      }, {
        z: defender.behind(-50),
        scale: 7,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 350
      }, {
        z: defender.behind(-50),
        scale: 7,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 500
      }, {
        z: defender.behind(-50),
        scale: 7,
        opacity: 0,
        time: 1000
      }, 'linear');
    } },
    "toxic": { anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 1,
        time: 400
      }, 'ballistic', 'explode');
    } },
    "toxicspikes": { anim(scene, [attacker, defender]) {
      scene.showEffect('poisoncaltrop', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5
      }, {
        x: +5,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.3,
        opacity: 1
      }, 'ballistic');
      scene.showEffect('poisoncaltrop', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.5,
        time: 200
      }, {
        x: -15,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.3,
        opacity: 1
      }, 'ballistic');
    } },
    "toxicthread": { anim(scene, [attacker, defender]) {
      scene.showEffect('web', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 400
      }, 'ballistic', 'explode');
      scene.showEffect('web', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 100
      }, {
        x: defender.x + 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'ballistic', 'explode');
      scene.showEffect('web', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 200
      }, {
        x: defender.x - 30,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 600
      }, 'ballistic', 'explode');
    } },
    "trailblaze": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 420
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 520
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('leaf1', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y - 60,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x + 60,
        y: defender.y,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y + 60,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('leaf1', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 60,
        y: defender.y,
        scale: 1.5,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "triattack": { anim(scene, [attacker, defender]) {
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 45,
        z: attacker.z,
        scale: 0,
        opacity: 0.2
      }, {
        scale: 0.5,
        opacity: 0.6,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x - 45,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0,
        opacity: 0.2,
        time: 100
      }, {
        scale: 0.5,
        opacity: 0.6,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 45,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0.5,
        opacity: 0.6,
        time: 600
      }, 'decel', 'fade');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 45,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.6,
        time: 400
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.8,
        time: 700
      }, 'accel', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x - 45,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.6,
        time: 500
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.8,
        time: 800
      }, 'accel', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x + 45,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.6,
        time: 600
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(5),
        opacity: 0.8,
        time: 900
      }, 'accel', 'explode');
      scene.showEffect('fireball', {
        x: defender.x - 15,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.8,
        time: 600
      }, {
        scale: 3,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.8,
        time: 700
      }, {
        scale: 5,
        opacity: 0,
        time: 1000
      }, 'linear');
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.5,
        opacity: 0.8,
        time: 800
      }, {
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear');
      defender.delay(675);
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 150
      }, 'swing');
    } },
    "trick": { anim(scene, [attacker, defender]) {
      scene.showEffect('pokeball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 0
      }, {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        time: 300
      }, 'ballistic2', 'fade');
      scene.showEffect('pokeball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('pokeball', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        time: 300
      }, {
        x: attacker.x - 50,
        y: attacker.y,
        z: attacker.z,
        time: 600
      }, 'ballistic2', 'fade');
      scene.showEffect('pokeball', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        time: 300
      }, {
        x: defender.x - 50,
        y: defender.y,
        z: defender.z,
        time: 600
      }, 'ballistic2Under', 'fade');
      scene.showEffect('pokeball', {
        x: attacker.x - 50,
        y: attacker.y,
        z: attacker.z,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 900
      }, 'ballistic2', 'explode');
      scene.showEffect('pokeball', {
        x: defender.x - 50,
        y: defender.y,
        z: defender.z,
        time: 600
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 900
      }, 'ballistic2Under', 'explode');
    } },
    "trickroom": { anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10
      });
      attacker.anim({
        x: attacker.x + 10
      });
      attacker.anim({
        x: attacker.x
      });
    } },
    "tripleaxel": { anim(scene, [attacker, defender]) {
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('icicle', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 450
      }, {
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 750
      }, 'linear');
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 750
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 1050
      }, 'linear');
      BattleOtherAnims.xattack.anim(scene, [attacker, defender]);
    } },
    "uturn": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic2');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    } },
    "vacuumwave": { anim(scene, [attacker, defender]) {
      scene.showEffect('fist', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 1
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 200
      }, 'accel', 'fade');
    } },
    "vcreate": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        scale: 6,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x - 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 350
      }, {
        scale: 6,
        opacity: 0,
        time: 650
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 350
      }, {
        scale: 6,
        opacity: 0,
        time: 650
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x - 70,
        y: defender.y + 70,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        scale: 6,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x + 70,
        y: defender.y + 70,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        scale: 6,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        scale: 6,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x - 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 550
      }, {
        scale: 6,
        opacity: 0,
        time: 850
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 550
      }, {
        scale: 6,
        opacity: 0,
        time: 850
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x - 70,
        y: defender.y + 70,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 600
      }, {
        scale: 6,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x + 70,
        y: defender.y + 70,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 600
      }, {
        scale: 6,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-5),
        scale: 1.5,
        opacity: 0,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.8,
        time: 300
      }, 'accel', 'explode');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(15),
        time: 200
      }, 'decel');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "voltswitch": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: defender.behind(-130),
        opacity: 0.8,
        time: 275
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.behind(10),
        opacity: 0.7,
        scale: 0,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.7,
        scale: 0,
        time: 700
      }, {
        scale: 4,
        opacity: 0,
        time: 1000
      }, 'linear');
      attacker.anim({
        z: attacker.behind(15),
        time: 200
      }, 'decel');
      attacker.anim({
        z: defender.behind(-170),
        time: 100
      }, 'accel');
      attacker.anim({
        z: attacker.z,
        time: 300
      }, 'swing');
      defender.delay(500);
      defender.anim({
        x: defender.leftof(5),
        y: defender.y,
        z: defender.behind(15),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "wakeupslap": { anim(scene, [attacker, defender]) {
      scene.showEffect('rightchop', {
        x: defender.x + 30,
        y: defender.y,
        z: defender.behind(-10),
        scale: 0.6,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 10,
        y: defender.y - 10,
        xscale: 0,
        opacity: 0.5,
        time: 512.5
      }, 'linear', 'fade');
      scene.showEffect('leftchop', {
        x: defender.x,
        y: defender.y - 10,
        z: defender.behind(-10),
        scale: 0.6,
        xscale: 0,
        opacity: 1,
        time: 512.5
      }, {
        x: defender.x - 30,
        y: defender.y,
        xscale: 0.6,
        opacity: 0,
        time: 625
      }, 'linear', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "waterfall": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: attacker.x + 20,
        y: attacker.y + 30,
        z: defender.z,
        scale: 0,
        opacity: 1
      }, {
        y: attacker.y - 20,
        scale: 4,
        opacity: 0
      }, 'decel');
      scene.showEffect('waterwisp', {
        x: Math.floor((attacker.x + defender.x) / 2) - 20,
        y: Math.floor((attacker.y + defender.y) / 2) + 30,
        z: Math.floor((attacker.z + defender.z) / 2),
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        y: Math.floor((attacker.y + defender.y) / 2) - 20,
        scale: 4,
        opacity: 0
      }, 'decel');
      scene.showEffect('waterwisp', {
        x: defender.x + 10,
        y: defender.y + 30,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        y: defender.y - 20,
        scale: 4,
        opacity: 0
      }, 'decel');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 300,
        opacity: 0.5
      }, 'accel');
      attacker.anim({
        x: defender.x,
        y: defender.x,
        z: defender.behind(100),
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(70),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 500
      }, 'decel');
      defender.delay(260);
      defender.anim({
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "waterspout": { anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(625);
        defender.anim({
          x: defender.x - 30,
          time: 75
        });
        defender.anim({
          x: defender.x + 30,
          time: 100
        });
        defender.anim({
          x: defender.x - 30,
          time: 100
        });
        defender.anim({
          x: defender.x + 30,
          time: 100
        });
        defender.anim({
          x: defender.x,
          time: 100
        });
      }
      const defender = defenders[1] || defenders[0];
      scene.backgroundEffect('#0000DD', 1100, 0.2);
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 6,
        opacity: 0
      }, 'linear', 'fade');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y - 35,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 0
      }, {
        x: attacker.x + 30,
        y: attacker.y + 150,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y - 35,
        z: attacker.z,
        scale: 0.9,
        opacity: 0.6,
        time: 50
      }, {
        x: attacker.x - 30,
        y: attacker.y + 150,
        z: attacker.z,
        scale: 1,
        opacity: 0,
        time: 350
      }, 'decel', 'fade');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y - 35,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 100
      }, {
        x: attacker.x - 10,
        y: attacker.y + 150,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y - 35,
        z: attacker.z,
        scale: 0.9,
        opacity: 0.6,
        time: 150
      }, {
        x: attacker.x + 10,
        y: attacker.y + 150,
        z: attacker.z,
        scale: 1,
        opacity: 0,
        time: 450
      }, 'decel', 'fade');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y - 35,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 200
      }, {
        x: attacker.x + 35,
        y: attacker.y + 150,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y + 175,
        z: attacker.behind(-90),
        scale: 0.4,
        opacity: 1,
        time: 300
      }, {
        x: defender.x + 45,
        y: defender.y + 20,
        z: defender.z,
        scale: 1.5,
        opacity: 0.7,
        time: 600
      }, 'accel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y + 175,
        z: attacker.behind(-90),
        scale: 0.4,
        opacity: 1,
        time: 375
      }, {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 1,
        opacity: 0.7,
        time: 675
      }, 'accel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y + 175,
        z: attacker.behind(-90),
        scale: 0.4,
        opacity: 1,
        time: 450
      }, {
        x: defender.x + 30,
        y: defender.y,
        z: defender.z,
        scale: 1.5,
        opacity: 0.7,
        time: 750
      }, 'accel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y + 175,
        z: attacker.behind(-90),
        scale: 0.4,
        opacity: 1,
        time: 525
      }, {
        x: defender.x - 40,
        y: defender.y + 5,
        z: defender.z,
        scale: 1,
        opacity: 0.7,
        time: 825
      }, 'accel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y + 175,
        z: attacker.behind(-90),
        scale: 0.4,
        opacity: 1,
        time: 525
      }, {
        x: defender.x + 40,
        y: defender.y + 5,
        z: defender.z,
        scale: 1,
        opacity: 0.7,
        time: 825
      }, 'accel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y + 175,
        z: attacker.behind(-90),
        scale: 0.4,
        opacity: 1,
        time: 575
      }, {
        x: defender.x - 70,
        y: defender.y + 5,
        z: defender.z,
        scale: 1.5,
        opacity: 0.7,
        time: 875
      }, 'accel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y + 175,
        z: attacker.behind(-90),
        scale: 0.4,
        opacity: 1,
        time: 650
      }, {
        x: defender.x + 70,
        y: defender.y + 5,
        z: defender.z,
        scale: 1.5,
        opacity: 0.7,
        time: 950
      }, 'accel', 'explode');
    } },
    "wavecrash": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#000039 30%, #3848B8)', 600, 0.6);
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        scale: 8,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('waterwisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        scale: 8,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "weatherball": { anim(scene, [attacker, defender]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1
      }, {
        y: attacker.y + 90,
        opacity: 0
      }, 'linear');
      scene.showEffect('iceball', {
        x: defender.x,
        y: defender.y + 90,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 500
      }, {
        y: defender.y,
        opacity: 1,
        time: 1000
      }, 'linear', 'explode');
    } },
    "whirlpool": { anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.6
      }, {
        x: defender.x + 30,
        y: defender.y + 20,
        z: defender.z,
        scale: 1,
        opacity: 0.3
      }, 'ballistic', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 1,
        opacity: 0.3
      }, 'ballistic', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 0.3
      }, 'ballistic', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.6,
        time: 225
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.z,
        scale: 1,
        opacity: 0.3
      }, 'ballistic', 'explode');
    } },
    "whirlwind": { anim(scene, [attacker, defender]) {
      for (let i = 0; i < 3; i++) {
        scene.showEffect('wisp', {
          x: defender.x + 30,
          y: defender.y - 35,
          z: defender.behind(i * 40 - 60),
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 30,
          y: defender.y,
          z: defender.behind(i * 40 - 60),
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 30,
          y: defender.y + 35,
          z: defender.behind(i * 40 - 60),
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 30,
          y: defender.y,
          z: defender.behind(i * 40 - 60),
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x + 30,
          y: defender.y,
          z: defender.behind(i * 40 - 60),
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 30,
          y: defender.y - 35,
          z: defender.behind(i * 40 - 60),
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 30,
          y: defender.y,
          z: defender.behind(i * 40 - 60),
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 30,
          y: defender.y - 35,
          z: defender.behind(i * 40 - 60),
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
      }
    } },
    "wickedblow": { anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 900, 0.3);
      BattleOtherAnims.fastattack.anim(scene, [attacker, defender]);
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 260
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 500
      }, 'linear');
    } },
    "wildcharge": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.7,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 750
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
    "willowisp": { anim(scene, [attacker, defender]) {
      scene.showEffect('bluefireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0
      }, {
        x: defender.leftof(40),
        y: defender.y + 15,
        z: defender.z,
        scale: 0.8,
        opacity: 0.7,
        time: 500
      }, 'decel', 'fade');
      if (defender.isMissedPokemon) return;
      scene.showEffect('bluefireball', {
        x: defender.leftof(40),
        y: defender.y + 15,
        z: defender.z,
        scale: 0.8,
        opacity: 0.7,
        time: 500
      }, {
        x: defender.leftof(-40),
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 700
      }, 'swing', 'fade');
      scene.showEffect('bluefireball', {
        x: defender.leftof(-40),
        y: defender.y,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 700
      }, {
        x: defender.leftof(10),
        y: defender.y - 15,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 900
      }, 'swing', 'explode');
    } },
    "wish": { anim(scene, [attacker]) {
      scene.backgroundEffect(`url('${FX_BASE}bg-space.jpg')`, 600, 0.4);
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1
      }, {
        y: attacker.y + 130,
        opacity: 0
      }, 'accel');
    } },
    "woodhammer": { anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 420
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 520
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('leaf1', {
        x: defender.x,
        y: defender.y - 40,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        scale: 2,
        opacity: 0.4,
        time: 700
      }, 'decel', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x - 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 600
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.4,
        time: 800
      }, 'decel', 'fade');
      scene.showEffect('leaf2', {
        x: defender.x + 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.4,
        time: 900
      }, 'decel', 'fade');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "workup": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1,
        time: 500
      }, {
        x: attacker.leftof(-30),
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1,
        opacity: 0.3,
        time: 800
      }, 'ballistic2Under', 'fade');
      attacker.anim({
        y: attacker.y + 4,
        scale: 1.15,
        time: 200
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        time: 200
      }, 'decel');
    } },
    "xscissor": { anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 300
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 425
      }, {
        scale: 2,
        opacity: 0.5,
        time: 725
      }, 'linear', 'fade');
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 625
      }, {
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('leftslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 625
      }, {
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
    } },
    "yawn": { anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 800
      }, 'linear');
    } },
    "zenheadbutt": { anim(scene, [attacker, defender]) {
      scene.showEffect('mistball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 450
      }, {
        scale: 2,
        opacity: 0,
        time: 700
      }, 'linear');
      BattleOtherAnims.contactattack.anim(scene, [attacker, defender]);
    } },
    "zingzap": { anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.7,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x,
        y: defender.y - 40,
        z: defender.behind(15),
        scale: 3,
        opacity: 0,
        time: 750
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    } },
};

const BattleOtherAnims = OTHER;
const BattleMoveAnims = MOVES;
const Config = { routes: { client: "" } };
