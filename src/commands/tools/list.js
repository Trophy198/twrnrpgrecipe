const { SlashCommandBuilder, ComponentType, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('조합법')
        .setDescription('조합법을 검색합니다.')
        .addStringOption(option => option.setName('아이템')
            .setDescription('조합 가능한 아이템을 검색합니다.')
            .setAutocomplete(true)
            .setRequired(true)
        )
        .addBooleanOption(option =>
            option
                .setName('타인표시')
                .setDescription('타인에게 표시 여부(선택사항)')
                .setRequired(false)),

    async autocomplete(interaction, client) {


        const focusedValue = interaction.options.getFocused();
        const choices =
            [
                "하트렌더", "심판의 창", "악몽의 검 아트리샤", "디바인 슬레이어", "학살의 검 카에디스", "사자의 활 아그니투스", "스피릿 플레임", "엔드리스 스노우",
                "양면의 지팡이 아켈리우스", "천둥의 인도자 풀미나타", "게이트 오브 어비스", "파이널 오멘", "어비스 폴", "광란의 크레센도", "복수자의 형상",
                "대격변의 화관", "드래곤의 뿔", "정화의 화관", "초월의 화관", "거신의 갑주", "뒤틀린 영혼의 갑주", "핏빛 분노의 갑주", "파멸의 갑주 엑시티움",
                "희생의 로브 상기스", "서리사자의 망토", "숭배의 별", "핏빛 저주", "타락의 인장", "라자루스의 가보",
                "황폐한 영혼의 반지", "영원의 반지", "생명의 심장", "끝없는 갈망의 망토", "블러드 스톰", "수호천사","월광의 검 아스트라","몽환의 검 아트리샤",
                "신성한 기원의 날개", "창조의 날개","이터널 윈터","천지개벽","황폐","혼돈","코즈믹 리퍼","혼돈의 검 에스피슈","헤븐즈 도어",
                "월광의 검 아트리샤","베리엘의 손아귀","베리엘의 힘","신궁 피레스","소울베인","이터널 플레임","크로노 체이서","라스트 워드",
                "코즈믹 스타","레인메이커","선혈빛 증오","역병의 지팡이","소울 오브 어비스","아마겟돈","혼돈의 지팡이 에테노스","생명의 불꽃 하르모니",
                "에테르 비수","혼돈의 비수","종말의 배낭","만물의 배낭","절망의 배낭","천지조화","펠스파이크 아머","보이드샤드 아머","마혈의 갑주 네베디움","사신의 갑주 아타나시아","신풍의 도복","절망의 갑주 하데스",
                "폭풍의 로브","로브 오브 아크리치","천상의 로브 유피테르","지옥의 로브 타나토스","혈귀의 갑주","스피릿 오브 프로텍터","사신의 눈",
                "반신의 가면","절대자의 광휘","격노의 화관","극대노의 화관","절대영도의 화관","후드 오브 아포칼립스","마신의 뿔","지혜의 원천 프로피티아","헤븐즈 피스트",
                "신풍의 반지","희망의 반지","절망의 반지","운명의 반지","광기의 반지","얼어붙은 영혼의 반지","신의 뿔피리","지배자의 반지 라테아","절대자의 반지","네뷸라 로즈",
                "데모닉 피스트","죄악의 증표","악의 씨앗","소생의 반지","화염 군주의 날개","서리 군주의 날개","밤의 군주의 날개","스톰","창공의 지배자","깊은 심연의 망토",
                "대천사의 날개","요정의 가호","브레이브 하트","불멸자의 날개","소울 디바우러","천 마포 알카트리츠","플레임 익스플로전","진 환검 바하나르","핏빛 증오",
                "스태프 오브 어비스","지배자의 지팡이","심장추적자","독의 환상검 라크트리샤","에버프로스트 베인","소울스토커","천영의 환검 미크로네이서","번개의 창 티베리우스","빛의 검 오케아노스",
                "헬 라이서","크림슨 리퍼","블레이징 소울","블레이징 하트","파멸의 탄환","크림슨 크로스","크림슨 스타","겨울의 심장","분노","망각",
                "탐욕의 손아귀","천류의 창 아글라이아","천 마검 아스모데우스","영겁의 검 에스피슈","루인브링어","베리엘의 손톱","데블 체이서","단테스 인페르노","핀드 체이서","퍼니셔",
                "하이드로 버스터","시공의 대포 크로노스","천 마궁 아드렉트","창공의 활 피레스","필멸의 활 그리베돈","헬플레임","천 마봉 벨리우스","트리플 스노우","대지의 영혼 벤지아나",
                "대지의 심장 벤지아나","차원의 지팡이 에테노스","파멸의 배낭","대자연의 배낭","폭발의 배낭","정령의 비수","퓨어라이트 아머","피의 갑주 크루오리스","프로즌 로브",
                "탄식의 갑주 레퀴엠","로브 오브 네크로맨서","망령의 튜닉","성녀의 로브 다이아나","마녀의 로브 메데이아","천지창조","윈터 로브","망령의 갑주 그란디네","프로스트샤드 아머","헬스파이크 아머","선혈의 갑주 베네딕트",
                "태풍의 도복","폭풍의 도복","번개의 갑주","혈혼의 갑주","드루이드의 기운","대천사의 헤일로","마력의 원천 프로피티아","파괴의 뿔","나락의 눈","윌 오브 프로텍터","냉정의 화관","대마력의 원천 프로피티아",
                "청명의 화관","후드 오브 아포크리파","심판의 헤일로","왈라키아의 눈","진노의 화관","드래곤 마스크","화신의 눈"," 악마의 뿔","뇌신의 뿔","이터널 로즈","시린 죽음의 반지","일격의 반지","룬의 반지 이스피온","빛의 종","흑의 마도서",
                "열정의 반지","냉정의 반지","시간의 반지","위장자의 인장","타락한 분노의 망토","프로즌 하트","진노의 날개","방랑자의 망토","퓨어 크리스탈 윙","서리 요정의 날개","망자의 영혼","소울 이터","그림 하트","타락한 그림자의 망토","학살자의 날개",
                "불사조의 날개","피의 군주의 날개","스태프 오브 매드니스","크림슨 펌킨 로드","작렬의 장검 리오레우스","대지의 기둥 벤지아나","플레임 소울","스톰 리버","아이시클 스톰","피의 진혼창 상귀엘","혈혼검 테페시아","진성검 카론프니엠",
                "진성봉 크레네티아","진마검 엑시멜리아","진마궁 알카테","환검 바하나르","독의 고대검 라크샤","데스브링어","트윈 스노우","그림 비사쥬","후드 오브 그림리퍼","전장의 투구","로브 오브 세이지","리액티브 아머","요정의 예복",
                "수호의 도복","대지의 각갑","에버프로스트 건틀릿","마나 하트 프로스트","퓨어프로스트 건틀릿","소울 드링커","트루 가디언 링","마왕의 반지 데모니스","혼돈의 반지 라테아","리빙 드래곤 하트",
                "사신의 반지","잠식의 반지","이프리트의 심장","트루블러드 링","혼돈의 파이프 아자토스","신성한 빛의 반지","깊은 어둠의 반지","요정의 날개","굶주린 박쥐 날개","마나 하트 대","스태프 오브 어비드"," 진용검 라인하르트","진용봉 이레이브",
                "진용궁 에이엔스","피의 지배검 테페시아","피의 지배창 상귀엘","작열의 장검 리오레우스","대지의 기둥 벤지아나","강력한 힘의 배낭","잭 펌킨 투구","잭 펌킨 후드","진 용투 아크론","데스 비사쥬","후드 오브 리퍼","진용갑 마그론","혈석 갑주","피의 반지 테페루아",
                "마나 하트","과일맛 사탕 주머니","촉수의 뿔피리","현자의 반지","빛의 반지 세인트","어둠의 반지 다크니스","신성한 빛의 반지","백작의 망토","드래곤 윙","타락한 크리스탈 날개","암흑의 검","암흑의 장검","암흑의 장갑","암흑의 활","암흑의 지팡이","극염의 검",
                "극염의 장검","극염의 장갑","극염의 활","극염의 지팡이","극독의 검","극독의 장검","극독의 장갑","극독의 활","극독의 지팡이","힘의 배낭","기생의 검","촉수의 지팡이","독의 지배검 라크샤","강력한 힘의 배낭","감염된 크랩 아머",
                "소중한 바람막이 털옷","블러디 아머","블러디 로브","미스릴 곡괭이","심연의 곡괭이","혼돈의 곡괭이",
            ];
        const filtered = choices.filter((choice) =>
            choice.startsWith(focusedValue)
        );
        await interaction.respond(
            filtered.map((choice) => ({ name: choice, value: choice }))
        )

    },
    async execute(interaction, message, client) {
        
        ephbool = interaction.options.getBoolean('타인표시')

const wait = new EmbedBuilder()
.setTitle('검색중...⏱️')
        if (ephbool === true) {
            ephbool = false;
        } else {
            ephbool = true;
        }
       
        await interaction.reply({
            embeds : [wait],
            ephemeral: ephbool,
           
        })

        if (interaction.options.getString('아이템') == '하트렌더') {
            const embed = new EmbedBuilder()
                .setTitle(`하트렌더`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDVfMjc2/MDAxNjQxMzM5OTk2OTky.J9M1kADBB6A7iMC5cK76iP_k-v7GdOUf3ou74D4WwpIg.2sH2D8uGNYb99FZJ0Y0mkr0Pv7TypuYoAR0tF9B8Z5Ig.JPEG/HR.jpg?type=w740')
                .addFields(
                    { name: `**디 엔더**`, value: `> 습득처: 데스 핀드`, inline: true },
                    { name: `**파괴의 반지**`, value: `> 습득처: 데스 핀드` },
                    { name: `**화신의 심장**`, value: `> 습득처: 화신 이프리트` },
                    { name: `**핏빛 장미** or **희생의 문장**`, value: `> 습득처: 공작 라자루스` },
                    { name: `**폭풍의 결정**`, value: `> 습득처: 뇌신 발토라` },
                    { name: `**영혼의 파편**`, value: `> 습득처: 지하 군주 아가레스` },
                    { name: `**피의 결정** or **영혼의 꽃**`, value: `> 습득처: 공작 라자루스` },
                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '심판의 창') {
            const embed = new EmbedBuilder()
                .setTitle(`심판의 창`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDVfMjkx/MDAxNjQxMzQwMDM5MTgy.WHS3Kd2cGRsj_ehskyhUqeFIbOd3G0DAceQXRuQnfdQg.4nso41j0JvB3G4M4UfYnGpf7Kt6xltmOHdHd7QrHB78g.JPEG/BTNItem_Melee014.jpg?type=w740')
                .addFields(
                    { name: `**천지개벽**`, value: `> 습득처: `, inline: true },
                    { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                    { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                    { name: `**하늘의 결정**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**화염의 결정**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '악몽의 검 아트리샤') {
            const embed = new EmbedBuilder()
                .setTitle(`악몽의 검 아트리샤`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfOTkg/MDAxNjQyMjkyNjI3MzU5.j0BzAxvnXhkObVau3-ViDG3y-WcNj1eHEsgJOCLavsUg.qrr_qczArcgTEs9UecMlXArU1SGS9_1v_o97LZBg9Tgg.JPEG/BTNWeapon.jpg?type=w740')
                .addFields(
                    { name: `**몽환의 검 아트리샤**`, value: `> 습득처: `, inline: true },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**영혼의 파편**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                    { name: `**뒤틀린 유적의 조각**`, value: `> 습득처: ` },

                );
            await interaction.editReply({
                embeds: [embed],


            });


        } else if (interaction.options.getString('아이템') == '디바인 슬레이어') {
            const embed = new EmbedBuilder()
                .setTitle(`디바인 슬레이어`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAyMTlfMTY1/MDAxNjQ1MjIwNjcwMDY1.xyLapCl4qRWy-EuFVR3ZOyXZ-u2Iz1yalCdhLybG9ZYg.BrgdRkRM00ZYggi6bQ9Qz9BCZx-q17xeNqjT-h2hleEg.JPEG/BTNDivineSlayer.jpg?type=w740')
                .addFields(
                    { name: `**코즈믹 리퍼**`, value: `> 습득처: `, inline: true },
                    { name: `**디 엔더**`, value: `> 습득처: ` },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**군주의 징표**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },

                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '학살의 검 카에디스') {
            const embed = new EmbedBuilder()
                .setTitle(`학살의 검 카에디스`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjA3/MDAxNjQyMjkyNjU3OTE2.PO0kolZmuXoQ49unWwmctie2WsHG2uC7Z_pDDYhK-KMg.WCinGRoheI2jZ8csSsSlkfZSHnqgcULD4k49BLuoiOcg.JPEG/Item_Melee011.jpg?type=w740')
                .addFields(
                    { name: `**크림슨 리퍼**`, value: `> 습득처: `, inline: true },
                    { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                    { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                    { name: `**화염의 가호**`, value: `> 습득처: ` },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**영혼의 파편**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '사자의 활 아그니투스') {
            const embed = new EmbedBuilder()
                .setTitle(`사자의 활 아그니투스`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjEx/MDAxNjQyMjkyNzcxOTI1.zGbSUC-K_Iv_-_LXtUydPw6jAu0f88UOPknlKWVqfb8g.n2TVDuiS6YyGAbn3dyQq9ElIQrzdyDihSKC9uxEBaWAg.JPEG/Bow.jpg?type=w740')
                .addFields(
                    { name: `**신궁 피레스**`, value: `> 습득처: `, inline: true },
                    { name: `**디 엔더**`, value: `> 습득처: ` },
                    { name: `**신의 금속**`, value: `> 습득처: ` },
                    { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**지옥의 파편**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });



        } else if (interaction.options.getString('아이템') == '엔드리스 스노우') {
            const embed = new EmbedBuilder()
                .setTitle(`엔드리스 스노우`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfNjQg/MDAxNjQyMjkyNzM2NTIy.-4rRYJXarcLYtga7Ix4iAUWGs07zVgvOIFZSZvD0he8g.ilY7Gk3889Y41GJmJ3x-DFjmb6K7RmGEHnbv_JpawGgg.JPEG/BTNStaff.jpg?type=w740')
                .addFields(
                    { name: `**트리플 스노우**`, value: `> 습득처: `, inline: true },
                    { name: `**영원의 잔**`, value: `> 습득처: ` },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**화염의 가호**`, value: `> 습득처: ` },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });


        } else if (interaction.options.getString('아이템') == '양면의 지팡이 아켈리우스') {
            const embed = new EmbedBuilder()
                .setTitle(`양면의 지팡이 아켈리우스`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfMjAy/MDAxNjQxNTA2MDAxNDIy.-qo3QnShTe8rGdIdY8zV66ar1rzVEcpZOfIQBSggTEcg.YaC9bIS1rDjO4DbOojqU3Oljpo63qRd74ShJNR4ZoPgg.JPEG/BTNItem_Staff022.jpg?type=w740')
                .addFields(
                    { name: `**선혈빛 증오**`, value: `> 습득처: `, inline: true },
                    { name: `**핏빛 장미**`, value: `> 습득처: ` },
                    { name: `**화염의 결정**`, value: `> 습득처: ` },
                    { name: `**바다의 결정****`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**대지의 결정**`, value: `> 습득처: ` },

                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '천둥의 인도자 풀미나타') {
            const embed = new EmbedBuilder()
                .setTitle(`천둥의 인도자 풀미나타`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjcz/MDAxNjQyMjkyNzU5MTQ3.thqV02k2x2B37w6f9PhK_uz4KpSqC4584-TkksjzpZwg.injmaufvNoTQxpiYIFB9XEbLgCiAuzDC57r8OH9O7lMg.JPEG/Item_Staff021.jpg?type=w740')
                .addFields(
                    { name: `**디 엔더**`, value: `> 습득처: `, inline: true },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                    { name: `**화염의 결정**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**영혼의 파편**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '스피릿 플레임') {
            const embed = new EmbedBuilder()
                .setTitle(`스피릿 플레임`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA3MjZfMjMx/MDAxNjU4ODIxMDYwODgy.8r029Ar08VcPSjxeXZYX_JyBUcdBgflloHr1Z-l9SoMg.uLT6srHFazI3uDwMghiNx0lo4q75AFBbOzQ9laN4mhkg.JPEG/bow.jpg?type=w740')
                .addFields(
                    { name: `**이터널 플레임**`, value: `> 습득처: `, inline: true },
                    { name: `**지옥의 파편**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**대지의 결정**`, value: `> 습득처: ` },
                    { name: `**뒤틀린 유적의 조각**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '게이트 오브 어비스') {
            const embed = new EmbedBuilder()
                .setTitle(`게이트 오브 어비스`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA2MDlfMjE5/MDAxNjU0Nzc0NzYzNDQ3.FiSgEBRWshpqndgZ9MoT9bQ4Ied-uPPotGTJHZ1K_jMg.r_Bt44Bg8w2pvy3cOg1omKqcF1Ukq5VFfTresyRlmsIg.JPEG/BTNGate.jpg?type=w740')
                .addFields(
                    { name: `**소울 오브 어비스**`, value: `> 습득처: `, inline: true },
                    { name: `**디 엔더**`, value: `> 습득처: ` },
                    { name: `**군주의 징표**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**대지의 결정**`, value: `> 습득처: ` },

                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '파이널 오멘') {
            const embed = new EmbedBuilder()
                .setTitle(`파이널 오멘`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAzMTRfMjYw/MDAxNjQ3MjQ4NjAzNTc1.otrCgeGBzZozQ9wu1vDCSZB9kqxyuP34y5H8yoNnju4g.mN_fejjSwozYJyHlA5MTTg0FdV-HXtN1YGxPVXXbtZ8g.JPEG/BTNFinalOmen.jpg?type=w740')
                .addFields(
                    { name: `**라스트 워드**`, value: `> 습득처: `, inline: true },
                    { name: `**디 엔더**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },
                    { name: `**대지의 결정**`, value: `> 습득처: ` },
                    { name: `**뒤틀린 유적의 조각**`, value: `> 습득처: ` },

                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '어비스 폴') {
            const embed = new EmbedBuilder()
                .setTitle(`어비스 폴`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjc4/MDAxNjQyMjkyMzA3OTA0.fFP1Fw2zYOcVHn5r6gNAzwDlmKhdpvWNMkj1RUfhUD0g.Z4HJp_5ng_wXCMSCP83oBFtH18ghez7zyb8O7ysSBBEg.JPEG/BTNAbyssFall.jpg?type=w740')
                .addFields(
                    { name: `**코즈믹 스타**`, value: `> 습득처: `, inline: true },
                    { name: `**디 엔더**`, value: `> 습득처: ` },
                    { name: `**핏빛 장미**`, value: `> 습득처: ` },
                    { name: `**불로의 심장**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**지옥의 파편**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },

                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '광란의 크레센도') {
            const embed = new EmbedBuilder()
                .setTitle(`광란의 크레센도`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfMTc3/MDAxNjQxNTA1MDE4Mzkz.HZ8RoAiiD7fKjOCoOHjc5GaLqtD_fdYHhU-8BMDEHVUg.0iBJPhgbSOnr7GHsiHjSVeX7k1voilOcvCtrPdNpCWYg.JPEG/BTNHeadwear001.jpg?type=w740')
                .addFields(
                    { name: `**주시자의 눈**`, value: `> 습득처: `, inline: true },
                    { name: `**혼돈의 깃든 파편**`, value: `> 습득처: ` },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**영혼의 파편** or **지옥의 파편**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },


                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '정화의 화관') {
            const embed = new EmbedBuilder()
                .setTitle(`정화의 화관`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfNTIg/MDAxNjQxNTA1MDQyNDg2.SOofWmEKxWTzGS_tNrCzdwG7opjM6zHo7Gi7ISSeS4cg.Op8HOqC4-PtLE5i4J1I9wXuhigPaneN8Cy-dcUaTjcwg.JPEG/BTNItem_Headwear007.jpg?type=w740')
                .addFields(
                    { name: `**청명의 화관**`, value: `> 습득처: `, inline: true },
                    { name: `**화산의 심장**`, value: `> 습득처: ` },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**핏빛 장미**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },


                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '복수자의 형상') {
            const embed = new EmbedBuilder()
                .setTitle(`복수자의 형상`)
                .setColor('#9b59b6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfMjM5/MDAxNjQxNTA1MzAzMjEz.VnRiBEbOXk2yDe7a2vJFwgARCq64akuZLgaq6IbIcIAg.4KJD5LoOXiz7wdEp-5J7pAgWZBCoJkONml60GPvx_WIg.JPEG/BTNHelm.jpg?type=w740')
                .addFields(
                    { name: `**절대자의 광휘**`, value: `> 습득처: `, inline: true },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },



                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '대격변의 화관') {
            const embed = new EmbedBuilder()
                .setTitle(`대격변의 화관`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfOTEg/MDAxNjQyMjkyOTA5MzY2.4DmxIiOsIydRU15AUhk_kaZ2i-YUnqgpO79S6cW6b7sg.uGfGtUrAcFXb-yOfkuR_mDQCif-A91CJh_QoxrHea1cg.JPEG/BTNCrownOfCataclysm.jpg?type=w740')
                .addFields(
                    { name: `**극대노의 화관**`, value: `> 습득처: `, inline: true },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**핏빛 장미**`, value: `> 습득처: ` },
                    { name: `**생명의 기운**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '드래곤의 뿔') {
            const embed = new EmbedBuilder()
                .setTitle(`드래곤의 뿔`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA2MDZfMTA4/MDAxNjU0NTI0NTQ4NDg3.e_jS37FVad9i07iAoSaSmt5K_F-usDtp0L_cdhOdBfwg.FdRv7Y3GjnKjalQ_Ijv5ef6WVWNQgkLQId5cvTnTisQg.JPEG/BTNHorn.jpg?type=w740')
                .addFields(
                    { name: `**마신의 뿔**`, value: `> 습득처: `, inline: true },
                    { name: `**지옥의 파편**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },
                    { name: `**대지의 결정** or **대지의 가호**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '초월의 화관') {
            const embed = new EmbedBuilder()
                .setTitle(`초월의 화관`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA2MDRfNTIg/MDAxNjU0MzQzNzkxNTI1.W1rLNW4uzUDaAeimTGJeYgX-Il2fhXGazfspZta8cD0g.O3UAGeKe2f6F17nRWiqGgMf90WAU5bMAbwPYBQDM5zog.JPEG/BTNCrown.jpg?type=w740')
                .addFields(
                    { name: `**절대영도의 화관**`, value: `> 습득처: `, inline: true },
                    { name: `**군주의 징표**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                    { name: `**대지의 가호**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '거신의 갑주') {
            const embed = new EmbedBuilder()
                .setTitle(`거신의 갑주`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfMjU4/MDAxNjQxNTA1NzM2Nzg0.vUvo21l4KZL1k1lgTE4IQE-J6ncxvydzaU2FaK9BUCgg.aDKLU_fkQt1D-i9HI9RBumh1du8YS-FuBwAG9sHsMg8g.JPEG/BTNArmor.jpg?type=w740')
                .addFields(
                    { name: `**펠스파이크 아머**`, value: `> 습득처: `, inline: true },
                    { name: `**생명의 기운**`, value: `> 습득처: ` },
                    { name: `**핏빛 장미**`, value: `> 습득처: ` },
                    { name: `**대지의 가호**`, value: `> 습득처: ` },
                    { name: `**지옥의 파편**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '뒤틀린 영혼의 갑주') {
            const embed = new EmbedBuilder()
                .setTitle(`뒤틀린 영혼의 갑주`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfNjMg/MDAxNjQxNTA1NTgzMjM4.qDXAvJYqS-Eyb_x_bJoqdTI4G-0IQv3Ax1CwwXOTqe0g.AGsFGeOFpyIGzTTLRlrk-h1HP9ISbZ22JHtghiWPXaIg.JPEG/BTNArmor.jpg?type=w740')
                .addFields(
                    { name: `**절망의 갑주 하데스**`, value: `> 습득처: `, inline: true },
                    { name: `**주시자의 눈**`, value: `> 습득처: ` },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '핏빛 분노의 갑주') {
            const embed = new EmbedBuilder()
                .setTitle(`핏빛 분노의 갑주`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfMTc2/MDAxNjQxNTA1NjA1NDU3.4YByOBVMeGXeDz_R-IkARnu53lzIYPIwIWLBULkRzGEg.FBxxu5j8Rwor1csrv6EBObIkFUxKGP6KyS19AxY4_t4g.JPEG/BTNArmor.jpg?type=w740')
                .addFields(
                    { name: `**번개의 갑주**`, value: `> 습득처: `, inline: true },
                    { name: `**원한의 갑주**`, value: `> 습득처: ` },
                    { name: `**핏빛 장미**`, value: `> 습득처: ` },
                    { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '파멸의 갑주 엑시티움') {
            const embed = new EmbedBuilder()
                .setTitle(`파멸의 갑주 엑시티움`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAzMTRfMTYy/MDAxNjQ3MjQ3NjI0NjQ1.C0DnMVn8q6TpfkVA9flMTmInV70UDxveJPLUxxdRFU4g.A6UDsky1R9m0CGpy8ZuToGxMAd5aqJnxa-IiNfLRHmMg.JPEG/147864-f0a621f3e97eaba69736031c239725e4.jpg?type=w740')
                .addFields(
                    { name: `**사신의 갑주 아타나시아**`, value: `> 습득처: `, inline: true },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                    { name: `**뒤틀린 유적의 조각**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '희생의 로브 상기스') {
            const embed = new EmbedBuilder()
                .setTitle(`희생의 로브 상기스`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfMjYy/MDAxNjQxNTA1NjU3NDM0.2wAykMfxRQIgtKDfRCJaEWzNYJd-H-hwxg2aY5OyZ4Eg.iHSUbLQrOlAfibyhuezCJJmf8--446T2c5CDN706NNIg.JPEG/Armor.jpg?type=w740')
                .addFields(
                    { name: `**폭풍의 로브**`, value: `> 습득처: `, inline: true },
                    { name: `**화산의 심장**`, value: `> 습득처: ` },
                    { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                    { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                    { name: `**지옥의 파편**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },
                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '서리사자의 망토') {
            const embed = new EmbedBuilder()
                .setTitle(`서리사자의 망토`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAzMTRfMjE2/MDAxNjQ3MjQ4MDE3MDE4.P7Hcyy4HEf9n0befSXF74fu_F2-vStkGoOUauB1CbHUg.ncy2eYmv0AJg60sjDXRjTMEToWOklwAlo7Kzz2eE8Ygg.PNG/zz.png?type=w740')
                .addFields(
                    { name: `**윈터 로브**`, value: `> 습득처: `, inline: true },
                    { name: `**로브 오브 아크리치**`, value: `> 습득처: ` },
                    { name: `**대지의 가호**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },
                    { name: `**뒤틀린 유적의 조각**`, value: `> 습득처: ` },

                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '숭배의 별') {
            const embed = new EmbedBuilder()
                .setTitle(`숭배의 별`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjMz/MDAxNjQyMjkxNjU5NTYy.3EyRNdOwgU2agWVASDSrWvV0wohmNCab87FOaCTo6eMg.lAZvKRrSNeoIjlOqy0YBnOyD_cU-jBehUcxbkX9jH0sg.JPEG/Item_Accessory044.jpg?type=w740')
                .addFields(
                    { name: `**화산의 심장**`, value: `> 습득처: `, inline: true },
                    { name: `**빛의 결정**`, value: `> 습득처: ` },
                    { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**영혼의 파편**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },

                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '핏빛 저주') {
            const embed = new EmbedBuilder()
                .setTitle(`핏빛 저주`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjQw/MDAxNjQyMjkxNzQyMTc2.1VLjeIbpEpoTCrozlCcOfTmwc1UdksDcdxXYfzjY5iUg.DkO9Fr3N9rlvzS-00tgZAHxzAa1zaz1oL-C1rus99iog.JPEG/BTNRing.jpg?type=w740')
                .addFields(
                    { name: `**광기의 반지**`, value: `> 습득처: `, inline: true },
                    { name: `**영원의 잔**`, value: `> 습득처: ` },
                    { name: `**핏빛 장미**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                    { name: `**뒤틀린 유적의 조각**`, value: `> 습득처: ` },


                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '타락의 인장') {
            const embed = new EmbedBuilder()
                .setTitle(`핏빛 저주`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMTA2/MDAxNjQyMjkxNzAzOTU5.bCA7wIw7IQiFp8lN7dPwvNcFKxzWVGOYLVtm_Lrp3Dog.o-yKNKso30BYhaPMh7AmVYHwnlfXqHFw3Ye7cGJVJyEg.JPEG/BTNAcc.jpg?type=w740')
                .addFields(
                    { name: `**위장자의 인장**`, value: `> 습득처: `, inline: true },
                    { name: `**핏빛 장미**`, value: `> 습득처: ` },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**군주의 징표**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },


                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '라자루스의 가보') {
            const embed = new EmbedBuilder()
                .setTitle(`라자루스의 가보`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMTEw/MDAxNjQyMjkxODkxODUw.C888qLS1_gJbgDXMpq-OatY5bN45wEi9nI3ikgBG2pMg.rKWjSCedNGngb7OPOjdQSU0udUBpg4q8EPc9Kc4nNNEg.JPEG/BTNAcc.jpg?type=w740')
                .addFields(
                    { name: `**룬의 반지 이스피온**`, value: `> 습득처: `, inline: true },
                    { name: `**영원의 잔**`, value: `> 습득처: ` },
                    { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                    { name: `**화염의 가호**`, value: `> 습득처: ` },
                    { name: `**군주의 징표**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },


                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '황폐한 영혼의 반지') {
            const embed = new EmbedBuilder()
                .setTitle(`황폐한 영혼의 반지`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAyMTlfMjY0/MDAxNjQ1MjIwMTI1NDk0.3rcUmAZ58GeyclTfUe2KU4gyCz8zisSEdW3ZJSCfBWcg.xcbs-ZbWEI0XrzNnDj41ySUtuhk0sP0XJ9HcOnRpgFkg.JPEG/BTNRing.jpg?type=w740')
                .addFields(
                    { name: `**얼어붙은 영혼의 반지**`, value: `> 습득처: `, inline: true },
                    { name: `**영혼의 꽃** or **피의 결정**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },



                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '영원의 반지') {
            const embed = new EmbedBuilder()
                .setTitle(`영원의 반지`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjY5/MDAxNjQyMzA0Mjg3MTg0.JVdV-_D1_UjqTRbT_I-amYkum_m0JOHoLxfA767p-ekg.N2e4TMDVIw7_24AdG22McFo4kaAWZsLhW2KW8nxohyAg.JPEG/BTNRing_of_Eternity.jpg?type=w740')
                .addFields(
                    { name: `**운명의 반지**`, value: `> 습득처: `, inline: true },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**대지의 결정**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },



                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '생명의 심장') {
            const embed = new EmbedBuilder()
                .setTitle(`생명의 심장`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAzMjZfMTc3/MDAxNjQ4Mjg5MjExNjU3.k-tTInX_XU4RiK6KwufnZGOQp0csJ80S0ub98g7oHmog.4qRRtjwJL6SNU5Y5H9CDlvRDS2MdY6VDR3eoQ8bpnx8g.JPEG/BTNRing2.jpg?type=w740')
                .addFields(
                    { name: `**신의 뿔피리**`, value: `> 습득처: `, inline: true },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**대지의 가호**`, value: `> 습득처: ` },
                    { name: `**지옥의 파편**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },



                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '끝없는 갈망의 망토') {
            const embed = new EmbedBuilder()
                .setTitle(`끝없는 갈망의 망토`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDZfMjY2/MDAxNjQxNDM5NDE1MzYw.SKj1K6uC5_mbqqWGg8wjFqZN8nRfxlEVbSrqNL8QWKYg.ufGMCKiT0PF6iiF9Vd1CbV-WEg4_fz_JKD4qyr1slHIg.JPEG/BTNability_revendreth_warlock.jpg?type=w740')
                .addFields(
                    { name: `**피의 군주의 날개**`, value: `> 습득처: `, inline: true },
                    { name: `**집념의 장막**`, value: `> 습득처: ` },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                    { name: `**바다의 가호**`, value: `> 습득처: ` },
                    { name: `**지옥의 파편**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },



                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '블러드스톰') {
            const embed = new EmbedBuilder()
                .setTitle(`블러드스톰`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDZfMjcw/MDAxNjQxNDM5NDE2NDMy.SOPpaydxJdr-FSJj6VQbPe0YMYKLPX1P2Cy_qOND-Dsg.5lFpCvNMiNg1wD-W7Kyw_gJekBfTTDw_qw8s5545NAkg.JPEG/BTNWing.jpg?type=w740')
                .addFields(
                    { name: `**스톰**`, value: `> 습득처: `, inline: true },
                    { name: `**주시자의 눈**`, value: `> 습득처: ` },
                    { name: `**암흑의 결정**`, value: `> 습득처: ` },
                    { name: `**화염의 결정**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**영혼의 파편**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },



                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '수호천사') {
            const embed = new EmbedBuilder()
                .setTitle(`수호천사`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDZfMjAw/MDAxNjQxNDM5NDE0Mjk2.GFV0-1KdJ7pv33G8ccTaxLNLvVWx-Ws4rqJh9SM5Jasg.JXxsI5zjm8UpPt3fKiZav_Gy1zQllP4RZjlLiWC8rmsg.JPEG/BTNholy.jpg?type=w740')
                .addFields(
                    { name: `**정화의 날개**`, value: `> 습득처: `, inline: true },
                    { name: `**빛의 결정**`, value: `> 습득처: ` },
                    { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**군주의 징표**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**영혼의 꽃**`, value: `> 습득처: ` },



                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '신성한 기원의 날개') {
            const embed = new EmbedBuilder()
                .setTitle(`신성한 기원의 날개`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDZfMjA3/MDAxNjQxNDM4OTUyMDMz.EH0QuCu-f4N3mEzijPqndWCngdMNGG_lTuS7PjoKZ90g.9zdMkmf7MHwf2ZTXpmC-xnaAeo4NUXPhERaPVym-tScg.JPEG/BTNWings.jpg?type=w740')
                .addFields(
                    { name: `**생명의 가운**`, value: `> 습득처: `, inline: true },
                    { name: `**화산의 심장**`, value: `> 습득처: ` },
                    { name: `**피의 결정**`, value: `> 습득처: ` },
                    { name: `**영혼의 파편**`, value: `> 습득처: ` },
                    { name: `**대지의 결정**`, value: `> 습득처: ` },
                    { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                   



                );
            await interaction.editReply({
                embeds: [embed],


            });

        } else if (interaction.options.getString('아이템') == '창조의 날개') {
            const embed = new EmbedBuilder()
                .setTitle(`창조의 날개`)
                .setColor('#9B59B6')
                .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMTgz/MDAxNjQyMjkyMTA3MTU5.09jdEtkiG14ZFFcYBrHmye6Nk_SHwd7AytwwwUVQlpIg.sN3fwc4ONAzpyIG2AgYgFmtNsQAwwazQFMMRhon2pAUg.JPEG/BTNWingsOfCosmos.jpg?type=w740')
                .addFields(
                    { name: `**대천사의 날개**`, value: `> 습득처: `, inline: true },
                    { name: `**생명의 가운**`, value: `> 습득처: ` },
                    { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                    { name: `**바다의 결정**`, value: `> 습득처: ` },
                    { name: `**대지의 결정**`, value: `> 습득처: ` },
                    { name: `**희생의 문장**`, value: `> 습득처: ` },
                   



                );
            await interaction.editReply({
                embeds: [embed],


            });
        } else if (interaction.options.getString('아이템') == '헤븐즈 도어') {
            const embed = new EmbedBuilder()
            .setTitle(`헤븐즈 도어`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA4MDZfMjIw/MDAxNjU5NzU1NDE0NjA0.LqE6NBwGgvpFRCIrsikKDdhyoT32wYjyCJsVBhds5Xwg.hDQoLHnWjApeBUkWcjXX1LbMVqNNxjHQzXqnw1HejzIg.JPEG/HeavensDoor.jpg?type=w740')
            .addFields(
                { name: `**드래고닉 오브**`, value: `> 습득처: `, inline: true },
                { name: `**주시자의 눈**`, value: `> 습득처: ` },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '이터널 윈터') {
            const embed = new EmbedBuilder()
            .setTitle(`이터널 윈터`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTFfMTUz/MDAxNTg5MTMzNTM0OTI4.ko-rWESbbqkAye2tSw6zsYD7j-dhw257m5KehvFH4Iwg.kIy18gdnYaHbiyX6Wo5q-feQmNSfCzJqtUcfY5nwmkgg.JPEG/BTNEternalWinter.jpg?type=w740')
            .addFields(
                { name: `**겨울의 심장**`, value: `> 습득처: `, inline: true },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '천지개벽') {
            const embed = new EmbedBuilder()
            .setTitle(`천지개벽`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MDNfMjA1/MDAxNTIyNzU4ODYyMjI3.mRNnpJf1DJVfVK2kuk-juvQQfP_rMfsXfFgoGjr7958g.geYjvfZzOvoS7JiVHI0wMot8CL41Xmm-mRoples0W1Yg.JPEG.darkprank/BTNSpear06.jpg?type=w740')
            .addFields(
                { name: `**천류의 창 아글라이아**`, value: `> 습득처: `, inline: true },
                { name: `**번개의 창 티베리우스**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**불로의 심장**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '황폐') {
            const embed = new EmbedBuilder()
            .setTitle(`천지개벽`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTA5MThfMTc1/MDAxNjMxOTM5ODI5MDcy.H9PO4Rn6fuzXrbKMVGnckEZQwNdseM5r_g4Fzv2PaaQg.ydn55i0K73vKnBa-kBSDPs1ZP-GiAfDwPFfwN02rSmwg.JPEG/BTNItem_Melee012.jpg?type=w740')
            .addFields(
                { name: `**망각**`, value: `> 습득처: `, inline: true },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '혼돈') {
            const embed = new EmbedBuilder()
            .setTitle(`혼돈`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA4MThfMTc3/MDAxNTY2MDgzMDI1NDgx.qhtJfUZTu0GnUnyAtP_AGw8J8lJaXJcXqnrIiGaXhvEg.hyaM28sdGjdXaXIKtsqn13NfS6bi_NeiFJwS4qyyEs8g.JPEG/BTNinv_sword_69.jpg?type=w740')
            .addFields(
                { name: `**황폐**`, value: `> 습득처: `, inline: true },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '코즈믹 리퍼') {
            const embed = new EmbedBuilder()
            .setTitle(`코즈믹 리퍼`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTBfMTc5/MDAxNTg5MDUwNzgxMjE2.9ios3HsrHVa45D7pHoPj1XmzPMs02J_CqtHl2G7ZvaYg.uruGBJ3PWgf0iqR3C0kpV_MlRwucxMJ_5aSFz_Llmwgg.JPEG/BTNCosmicReaper.jpg?type=w740')
            .addFields(
                { name: `**크림슨 리퍼**`, value: `> 습득처: `, inline: true },
                { name: `**애증의 검 르반테**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**빛의 결정**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '혼돈의 검 에스피슈') {
            const embed = new EmbedBuilder()
            .setTitle(`혼돈의 검 에스피슈`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDAyMThfMjA4/MDAxNTgxOTc4ODA2NDc0.g081vXjIKBDP9YWp-FxsD8X6E89cP0Dbl1hzJKXacl4g.HnTt8E0JT01aOzcNdQZFNU4IPRjRwMYlA0kBH6PLkRgg.PNG/test.png?type=w740')
            .addFields(
                { name: `**영겁의 검 에스피슈**`, value: `> 습득처: `, inline: true },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '월광의 검 아스트라') {
            const embed = new EmbedBuilder()
            .setTitle(`월광의 검 아스트라`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA5MjJfMTEy/MDAxNjAwNzQxNjg1ODA3.HMVIcDkxzMJErCRsZiUAJ6JE369yWdDjvGbKsJ0AG98g.5VuAc2icH4Ps_uQxz0yEFNp1DmOUWbG7gmgGMDH8aHgg.JPEG/BTNSwordOfMoon.jpg?type=w740')
            .addFields(
                { name: `**천영의 환검 미크로네이서**`, value: `> 습득처: `, inline: true },
                { name: `**디 엔더**`, value: `> 습득처: ` },
                { name: `**신의 금속**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '캘러미티') {
            const embed = new EmbedBuilder()
            .setTitle(`캘러미티`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA2MjdfMjA2/MDAxNTkzMjIzODE0Njgz.NjsrGax2kIb9NewjQ6SJf1HhpVEm-rqd7TU6WORl0-gg.W7eFTHaG1bZUi_Qimv_YNAxe1TkTuyADYHW6xPSeITMg.JPEG/BTNCalamity.jpg?type=w740')
            .addFields(
                { name: `**루인브링어**`, value: `> 습득처: `, inline: true },
                { name: `**디 엔더**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '몽환의 검 아트리샤') {
            const embed = new EmbedBuilder()
            .setTitle(`몽환의 검 아트리샤`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjVfMzMg/MDAxNTI0NTg1NjAxODc1.y5fan4Rn5zyiwbuELf81jJCofH3D8CSLumgJ1lNcyrgg.Fs1oEsRZ6QtIAf5RRK_RXQ0zt95WxVjpOmEedchT_ngg.PNG.darkprank/BTNinv_sword_124.png?type=w740')
            .addFields(
                { name: `**빛의 검 오케아노스**`, value: `> 습득처: `, inline: true },
                { name: `**독의 환상검 라크트리샤**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
                { name: `**신의 금속**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '베리엘의 손아귀') {
            const embed = new EmbedBuilder()
            .setTitle(`베리엘의 손아귀`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTA5MTlfMTEz/MDAxNjMxOTk4MTMzMDg3.cSzX2PdV9LVvAnCCYpd80eYhwnnMecaBQLYGR9l2tOwg.ItwKb5GVZ1PCVrpC3oJ14OCg1cRIMsR-OcQhZjeapwAg.JPEG/Item_Melee013.jpg?type=w740')
            .addFields(
                { name: `**베리엘의 손톱**`, value: `> 습득처: `, inline: true },
                { name: `**탐욕의 손아귀**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '베리엘의 힘') {
            const embed = new EmbedBuilder()
            .setTitle(`베리엘의 힘`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTNfMTYg/MDAxNTcwOTA3NDI2Mjgy.7X1D418rCmoKNIiWPc4I96Zg4Ip4ZPGeXU9mnp5CrAwg.71kWomS0ZDUpSnwgHFy5G3Hjg7PfPV2yim3DXrBRujIg.JPEG/BTNinv_weapon_hand_08.jpg?type=w740')
            .addFields(
                { name: `**베리엘의 손아귀**`, value: `> 습득처: `, inline: true },
                { name: `**파괴의 반지**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '신궁 피레스') {
            const embed = new EmbedBuilder()
            .setTitle(`신궁 피레스`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MTBfNjcg/MDAxNTIzMjkxNTYyODQw.AtIs4BJUNt8YQjdrQLzQKQjFEbbYZtgkODOMu_0TXDIg.VHgLd3qdHLp1qDTl18U-FosLPOkRlNRql03nkJtNQWUg.JPEG.darkprank/BTNinv_weapon_bow_49.jpg?type=w740')
            .addFields(
                { name: `**창공의 활 피레스**`, value: `> 습득처: `, inline: true },
                { name: `**심장추적자**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**바람의 조각**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '소울베인') {
            const embed = new EmbedBuilder()
            .setTitle(`소울베인`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTFfMjQ0/MDAxNTg5MTI3MjEzMzk1.xb_jB8Wx_XcS7EAKv19SluWXDvbIF9MEdL5Edi6KgtAg.IStZgAPyr1w9fFmEucn0PARxzSjwonLS2fITtIj0V3Yg.JPEG/BTNSoulBane.jpg?type=w740')
            .addFields(
                { name: `**소울 스토커**`, value: `> 습득처: `, inline: true },
                { name: `**에버프로스트 베인**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '이터널 플레임') {
            const embed = new EmbedBuilder()
            .setTitle(`이터널 플레임`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTFfMjU3/MDAxNTg5MTI4ODc1MjQ1.QVBrsUQ6C0WQvJIeHUONcur6bghTjcwqhlKFNg964Ncg.o7c514b-qU_bJt1aTBGcpllIcVbCaso_zke7tUVvtoQg.JPEG/BTNEternalFlame.jpg?type=w740')
            .addFields(
                { name: `**헬플레임**`, value: `> 습득처: `, inline: true },
                { name: `**필멸의 활 그리베돈**`, value: `> 습득처: ` },
                { name: `**집념의 장막**`, value: `> 습득처: ` },
                { name: `**파괴의 반지**`, value: `> 습득처: ` },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '크로노 체이서') {
            const embed = new EmbedBuilder()
            .setTitle(`크로노 체이서`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTFfMjM4/MDAxNTg5MTQ2NDk2MTY3.v4hoCJMU1KZgnuyPHRj9JEEBvyhvn7uJ4Wk1p8HYn_Qg.4eV2cscA-Ic_YpHqCJ4h1L1dlt9IoMC8wGLBX7goP_Yg.JPEG/BTNCosmicChaser.jpg?type=w740')
            .addFields(
                { name: `**핀드 체이서**`, value: `> 습득처: `, inline: true },
                { name: `**시공의 대포 크로노스**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '라스트 워드') {
            const embed = new EmbedBuilder()
            .setTitle(`라스트 워드`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA4MThfMjU5/MDAxNTY2MDg3OTgxMDUy.LJzIvHJ9NQ70wkF2tTTn6TJyFWbLvBLile7bsZ2LimQg.BN3R0LQhe23GD6bDd7ltAqO1cfskRtW7KO6VN6W1dBEg.JPEG/Gun.jpg?type=w740')
            .addFields(
                { name: `**퍼니셔**`, value: `> 습득처: `, inline: true },
                { name: `**시공의 대포 크로노스**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '코즈믹 스타') {
            const embed = new EmbedBuilder()
            .setTitle(`코즈믹 스타`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjVfOTgg/MDAxNTI0NjIwOTk3NTgz.xBBSCrvOKZkBpdWl5DHppe-qpPa7N8iHUK5jzATKjwMg.5-eTKXFhmMXuy1EDKUsRNEi8c1DFqAfvaeBGetTbozog.JPEG.darkprank/BTNspell_arcane_invocation.jpg?type=w740')
            .addFields(
                { name: `**크림슨 스타**`, value: `> 습득처: `, inline: true },
                { name: `**주시자의 눈**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**빛의 결정**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '레인메이커') {
            const embed = new EmbedBuilder()
            .setTitle(`레인메이커`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTBfMTMz/MDAxNTg5MDcwMzU0NDA3.NGkamq4ysaZTyMzfoT7YNY3mn60NWGvrjVpiKNx2xXAg.rfazQ5091LG9kcGwWboxi5YJHi8Qj2mvrRRIQRVzU7cg.JPEG/BTNRainmaker.jpg?type=w740')
            .addFields(
                { name: `**하이드로 버스터**`, value: `> 습득처: `, inline: true },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**대자연의 정수**`, value: `> 습득처: ` },
                { name: `**신의 금속**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '선혈빛 증오') {
            const embed = new EmbedBuilder()
            .setTitle(`선혈빛 증오`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MTBfMjc0/MDAxNTIzMjkyNzU2MDY3.T7FZLSLOyQf_WjvNNCflRhXAbGet8TIkDzFddWoqVNUg.veRM5utvaHPsWPjfBO1b2s6UA4fgHp5naV_sxTmSbbgg.JPEG.darkprank/BTNinv_staff_52.jpg?type=w740')
            .addFields(
                { name: `**핏빛 증오**`, value: `> 습득처: `, inline: true },
                { name: `**영혼의 지팡이**`, value: `> 습득처: ` },
                { name: `**드래고닉 오브**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '역병의 지팡이') {
            const embed = new EmbedBuilder()
            .setTitle(`역병의 지팡이`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjVfMTI0/MDAxNTI0NjEzNTIyNjI0.FzRw0hECri0qcjwmUldVbbzNPDHv4iqMUIGhN7cPSwAg.TyTOr5Vd8lvleCEvOQRQFBCNYE3BZ0wJZHXeLU9lTZkg.JPEG.darkprank/BTNStaff10.jpg?type=w740')
            .addFields(
                { name: `**전염의 지팡이**`, value: `> 습득처: `, inline: true },
                { name: `**기생의 지팡이**`, value: `> 습득처: ` },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '소울 오브 어비스') {
            const embed = new EmbedBuilder()
            .setTitle(`소울 오브 어비스`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfNDAg/MDAxNTc2MzQzNTYxMDU2.OC2q1GseqI8_0x9V4MfbzUj6J8q_Ufb-N5F4HNYEoUUg.K25Uoq14ARh2tcRglpTC79LhTpYWFt1RjfTnpWli0wwg.JPEG/test.jpg?type=w740')
            .addFields(
                { name: `**스태프 오브 어비스**`, value: `> 습득처: `, inline: true },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**빛의 결정**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '아마겟돈')  {
            const embed = new EmbedBuilder()
            .setTitle(`아마겟돈`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDAyMjFfMzYg/MDAxNTgyMjQ4NzU2ODE4.au2ARmyA1K1dvD_jrhwG_iTbjGrK_yeJuPcwbW5oEckg.1spRtmHFN_VRNK5oi_CddwOQboahf8xx2HNkxEB43Uwg.JPEG/BTNArmageddon.jpg?type=w740')
            .addFields(
                { name: `**헬 라이서**`, value: `> 습득처: `, inline: true },
                { name: `**핏빛 증오**`, value: `> 습득처: ` },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '혼돈의 지팡이 에테노스') {
            const embed = new EmbedBuilder()
            .setTitle(`혼돈의 지팡이 에테노스`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDAyMjFfMjk5/MDAxNTgyMjQ5Mzc3NDEx.xuyvzNIwoBg_wYTtdFdT__Is-otHX9Zqrs4x-f-H5rgg.7FD2kveeWuaAdvXhfoe5jG1727J_03HoQXxdcsXTZucg.JPEG/BTNEthenos.jpg?type=w740')
            .addFields(
                { name: `**차원의 지팡이 에테노스**`, value: `> 습득처: `, inline: true },
                { name: `**빛의 결정**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '에테르 비수') {
            const embed = new EmbedBuilder()
            .setTitle(`에테르 비수`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTA5MTlfMjcw/MDAxNjMxOTk5OTUzNDA3.y4hrcbZGFC8UMhsqkvdB9OTiYu9AWNM1duE7DJNS5YIg.WWCYo9nvZgKiphAeoWbI6zg4rxm222pshtn1_sTfzosg.JPEG/BTNItem_Weapon017.jpg?type=w740')
            .addFields(
                { name: `**정령의 비수**`, value: `> 습득처: `, inline: true },
                { name: `**지배자의 지팡이**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '혼돈의 비수') {
            const embed = new EmbedBuilder()
            .setTitle(`혼돈의 비수`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA4MThfMjI5/MDAxNTY2MDgzODIwODk0.LYOqktn9WFBBj_E97j9cmLIuOUwS2EglIOedDsHc2Tog.Bsy62xk3fPWiojx7uxRe09nOEvhcQrgKWJFKunFaDx4g.JPEG/BTNSword19.jpg?type=w740')
            .addFields(
                { name: `**에테르 비수**`, value: `> 습득처: `, inline: true },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '종말의 배낭') {
            const embed = new EmbedBuilder()
            .setTitle(`종말의 배낭`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTBfMTg5/MDAxNTg5MDU4NzIxNjQ3.GTWiStAsgrHnQJJfv-WE2T6U9JZfrnwm7mScvKt0498g.tNh20HjzYuP1_RIICNO_97OrUwwWn5CqOOfz8ruGQ38g.JPEG/BTNBagOfDemise.jpg?type=w740')
            .addFields(
                { name: `**파멸의 배낭**`, value: `> 습득처: `, inline: true },
                { name: `**파괴의 반지**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '만물의 배낭') {
            const embed = new EmbedBuilder()
            .setTitle(`만물의 배낭`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTNfMjUg/MDAxNTcwOTA0MzYzNjk5.YpyH61GAY0nR_X1nFdvDo83fmiYaRlgljd9LS48aopUg.CNLGKQY-DwpP_DJzPaNtzcNKTAnNRbMEpcfzX3BxOUgg.JPEG/BTNinv_misc_bag_24_netherweave_imbued.jpg?type=w740')
            .addFields(
                { name: `**대자연의 배낭**`, value: `> 습득처: `, inline: true },
                { name: `**드래고닉 오브**`, value: `> 습득처: ` },
                { name: `**빛의 결정**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '절망의 배낭') {
            const embed = new EmbedBuilder()
            .setTitle(`절망의 배낭`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTBfMTk0/MDAxNTg5MDU4NDg2MDY0.tXvm7VZpP3sJFNpsDXIfTgCe5vGmHci0A-euPd9cNtAg.2MGpKfLAHumOD4JOPYH4IXEG10bryPmnmYbwJQ1Scygg.JPEG/BTNBagOfDespair.jpg?type=w740')
            .addFields(
                { name: `**폭발의 배낭**`, value: `> 습득처: `, inline: true },
                { name: `**주시자의 눈**`, value: `> 습득처: ` },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
              
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '천지조화') {
            const embed = new EmbedBuilder()
            .setTitle(`천지조화`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA2MjdfMjU0/MDAxNTkzMjIyOTYyMzQx.OcL_IU0ffB043a7B3osbFsy-KgeYKDQPoj9JizhZN8kg.zjUJE97aox-dOEM3XsXVfnboKmN7y9uaWy8M4XOcubwg.JPEG/BTNArmor.jpg?type=w740')
            .addFields(
                { name: `**천지창조**`, value: `> 습득처: `, inline: true },
                { name: `**대자연의 포옹**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
              
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '펠스파이크 아머') {
            const embed = new EmbedBuilder()
            .setTitle(`펠스파이크 아머`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA5MjlfMjA2/MDAxNTY5NzExOTY3Nzk2.MbW89f2R2KfqehkkvbMt6K1khfAcRRj0rceuTE_tOWYg.uJ_8wWgRwX9gMrLkdQna7HJ_465x1wj9UFuaqdq4gkgg.JPEG/BTNinv_chest_mail_03.jpg?type=w740')
            .addFields(
                { name: `**헬스파이크 아머**`, value: `> 습득처: `, inline: true },
                { name: `**원한의 갑주**`, value: `> 습득처: ` },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**불로의 심장**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
              
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '보이드샤드 아머') {
            const embed = new EmbedBuilder()
            .setTitle(`보이드샤드 아머`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDEwMjRfMjYg/MDAxNjAzNTA5NzEwNjY1.nRWEvC6QaLd09UGFTTgZRDeZgyhKRraM6BGQ4d4eGL4g.cERSQBGavI6slxFWvgaj7srawkUORy7Kd27RZSUVjTYg.JPEG/BTNVoidshardArmor.jpg?type=w740')
            .addFields(
                { name: `**프로스트샤드 아머**`, value: `> 습득처: `, inline: true },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
              
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '마혈의 갑주 네베디움') {
            const embed = new EmbedBuilder()
            .setTitle(`마혈의 갑주 네베디움`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTNfMTMx/MDAxNTcwOTI3NTMyMjM2.xFeAa75kUIpLvlQ72UM0dtqnZ1j59fDxRq4NscWyn5og.B2A4tmyWavC7kC8dj9YxRx-5Tvx_Uq1N5jxd-2y_igQg.JPEG/BTNinv_chest_plate21.jpg?type=w740')
            .addFields(
                { name: `**선혈의 갑주 베네딕트**`, value: `> 습득처: `, inline: true },
                { name: `**원한의 갑주**`, value: `> 습득처: ` },
                { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
              
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '사신의 갑주 아타나시아') {
            const embed = new EmbedBuilder()
            .setTitle(`사신의 갑주 아타나시아`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA5MjlfMTc0/MDAxNTY5NzExNjgyMzQ2.ss2snImICmq4PdQpc7DxHL2bNSTJRXuKy5iOpIcDxBUg.IzUjA2iiSoDaWquyHHjQ-WxtSGKFFHFTVSHdew0ORUMg.JPEG/BTNArmor.jpg?type=w740')
            .addFields(
                { name: `**망령의 갑주 그란디네**`, value: `> 습득처: `, inline: true },
                { name: `**원한의 갑주**`, value: `> 습득처: ` },
                { name: `**시린 죽음의 반지**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
              
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '신풍의 도복') {
            const embed = new EmbedBuilder()
            .setTitle(`신풍의 도복`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA5MDZfMTQy/MDAxNTk5MzkxMTg0MzEw.2iUZBomghUG-yyFWsDrmUztw_rYF0dhSTGuV3Dx8xiIg.9TvQpxGpC2V8PFaDapIJmZVHDjKyBZ7hmjk3Szdo3VQg.JPEG/BTNshinpung.jpg?type=w740')
            .addFields(
                { name: `**폭풍의 도복**`, value: `> 습득처: `, inline: true },
                { name: `**창공의 수호자**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` }
              
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '절망의 갑주 하데스') {
            const embed = new EmbedBuilder()
            .setTitle(`절망의 갑주 하데스`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA5MDZfMTQy/MDAxNTk5MzkxMTg0MzEw.2iUZBomghUG-yyFWsDrmUztw_rYF0dhSTGuV3Dx8xiIg.9TvQpxGpC2V8PFaDapIJmZVHDjKyBZ7hmjk3Szdo3VQg.JPEG/BTNshinpung.jpg?type=w740')
            .addFields(
                { name: `**탄식의 갑주 레퀴엠**`, value: `> 습득처: `, inline: true },
                { name: `**원한의 갑주**`, value: `> 습득처: ` },
                { name: `**진 혈석 갑주**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
                { name: `**용의 눈**`, value: `> 습득처: ` },
                { name: `**스켈레톤 본**`, value: `> 습득처: ` },
             
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '폭풍의 로브') {
            const embed = new EmbedBuilder()
            .setTitle(`폭풍의 로브`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTEwMjlfMjYw/MDAxNjM1NDc0Mjk5NzMw.dsbIfWpVyeMhQ7Sslzzm5xuYhOd1jp6ziyFpbFFEQMwg.Gf16aQXR9Tcrd9eeT_28pyDwxdaQfZAk09OAxayKBM4g.JPEG/Armor.jpg?type=w740')
            .addFields(
                { name: `**드래고닉 스킨 루살카**`, value: `> 습득처: `, inline: true },
                { name: `**폭풍의 반지**`, value: `> 습득처: ` },
                { name: `**정화의 증표**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
             
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '로브 오브 아크리치') {
            const embed = new EmbedBuilder()
            .setTitle(`폭풍의 로브`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTEwMjlfMjYw/MDAxNjM1NDc0Mjk5NzMw.dsbIfWpVyeMhQ7Sslzzm5xuYhOd1jp6ziyFpbFFEQMwg.Gf16aQXR9Tcrd9eeT_28pyDwxdaQfZAk09OAxayKBM4g.JPEG/Armor.jpg?type=w740')
            .addFields(
                { name: `**로브 오브 네트로맨서**`, value: `> 습득처: `, inline: true },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**신의 금속**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
             
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '천상의 로브 유피테르') {
            const embed = new EmbedBuilder()
            .setTitle(`천상의 로브 유피테르`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTEwMjlfMjYw/MDAxNjM1NDc0Mjk5NzMw.dsbIfWpVyeMhQ7Sslzzm5xuYhOd1jp6ziyFpbFFEQMwg.Gf16aQXR9Tcrd9eeT_28pyDwxdaQfZAk09OAxayKBM4g.JPEG/Armor.jpg?type=w740')
            .addFields(
                { name: `**성녀의 로브 다이아나**`, value: `> 습득처: `, inline: true },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
             
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '지옥의 로브 타나토스') {
            const embed = new EmbedBuilder()
            .setTitle(`지옥의 로브 타나토스`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MTFfMTQ0/MDAxNTk3MTE3MDc4Njc4.GpWxMmurQNV4_GjXaeH13ePqp0aVXwXFibuvpetvursg.y4JuaafTOV6uQlSH0L5tIJnULAW7R2-sflACoVE0eVcg.JPEG/BTNItem_Armor021.jpg?type=w740')
            .addFields(
                { name: `**마녀의 로브 메데이아**`, value: `> 습득처: `, inline: true },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
             
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '혈귀의 갑주') {
            const embed = new EmbedBuilder()
            .setTitle(`혈귀의 갑주`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MTFfMTg5/MDAxNTk3MTE3NTU4NTc2.RP95JTc9IynEyTgpEHLnv-U946XUfDezQb0s_8hbXeAg.2DmikjT1w8Wl7hb3yK3_uL6zh2Ga1MU_q1VlQZrYT3cg.PNG/BTNItem_Armor022.PNG?type=w740')
            .addFields(
                { name: `**혈혼의 갑주**`, value: `> 습득처: `, inline: true },
                { name: `**원한의 갑주**`, value: `> 습득처: ` },
                { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
             
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '뇌신의 뿔') {
            const embed = new EmbedBuilder()
            .setTitle(`뇌신의 뿔`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA5MDJfMjQx/MDAxNjYyMDk1Mzk2Mjgz.3DjthnZ7X7lYoZDhmhPZeZPsNULGxmIfmU9JMKlJ9xgg.yFWXjVLoa6hlhk2MRTJKY9x8nHXcuoqPXsfgBVb9yeYg.JPEG/BTNinv_helmet_164.jpg?type=w740')
            .addFields(
                { name: `**악마의 뿔**`, value: `> 습득처: `, inline: true },
                { name: `**신의 금속**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**순수의 강철**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '화신의 눈') {
            const embed = new EmbedBuilder()
            .setTitle(`화신의 눈`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA5MDJfMjM4/MDAxNjYyMDk1Mzc1OTcz.MQNtdH3m8CY5c9L20Y7dDLK1jYJnwl9J0d0okOCphjcg.hSJR5_98EtdieJ4w7AuRB6MoFFGjGolJupKWe66JG0Qg.JPEG/BTNspell_holy_arcaneintellect.jpg?type=w740')
            .addFields(
                { name: `**나락의 눈**`, value: `> 습득처: `, inline: true },
                { name: `**용의 눈**`, value: `> 습득처: ` },
                { name: `**화염의 결정 or 화염의 가호**`, value: `> 습득처: ` },
                { name: `**분노의 결정**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '스피릿 오브 프로텍터') {
            const embed = new EmbedBuilder()
            .setTitle(`스피릿 오브 프로텍터`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTNfOTIg/MDAxNTcwOTA4MjI1MTM1.5dnABuo_m7HU7DChLs1s8sU9c9aaZIahafFkBYxst9kg.iSgvVXmINXx72-uJ7NQmmFiFiA1O6wV4tH2309Co7pEg.JPEG/BTNSpirit.jpg?type=w740')
            .addFields(
                { name: `**윌 오브 프로텍터**`, value: `> 습득처: `, inline: true },
                { name: `**주시자의 눈**`, value: `> 습득처: ` },
                { name: `**정화의 증표**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '사신의 눈') {
            const embed = new EmbedBuilder()
            .setTitle(`사신의 눈`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTBfNTQg/MDAxNTg5MDkyMDM4MjIz.zHs00UyMFHfOJWJ-ySh5PCIzbvHQ-18Q5v1f-4TaGpog.p4cou-sZsQxTon7b8kIiILt3m3bNvUYR3G0BPk0W2Csg.JPEG/BTNEyeOfTheReaper.jpg?type=w740')
            .addFields(
                { name: `**왈라키아의 눈**`, value: `> 습득처: `, inline: true },
                { name: `**주시자의 눈**`, value: `> 습득처: ` },
                { name: `**심연의 기운**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '반신의 가면') {
            const embed = new EmbedBuilder()
            .setTitle(`반신의 가면`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTBfMzAw/MDAxNTg5MDY5OTE5MzQ2.NQVbvIM6A3Y5iKdYBCvM2uGqRAcSSu05uSpIw-LZU8Yg.bCocWoaBC8RuoimagOA1rYwaTkeYbO7g0ctblMbKYuEg.JPEG/BTNMaskOfDemigod.jpg?type=w740')
            .addFields(
                { name: `**드래곤 마스크**`, value: `> 습득처: `, inline: true },
                { name: `**바람의 조각**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '절대자의 광휘') {
            const embed = new EmbedBuilder()
            .setTitle(`절대자의 광휘`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTNfMTM0/MDAxNTcwOTMyMTIzMTc5.fRXw2VR4BTGkWTii8qdr_EZ9x64fhGJAUEDQFauKL-0g.f0BikYT9nAiY9anwJMv6-P93WfhzPNannb-rKiW2Qnkg.JPEG/BTNShine.jpg?type=w740')
            .addFields(
                { name: `**심판의 헤일로**`, value: `> 습득처: `, inline: true },
                { name: `**용의 눈**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '격노의 화관') {
            const embed = new EmbedBuilder()
            .setTitle(`격노의 화관`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTAxMDNfMTUg/MDAxNjA5NjUyMzE1NDM2.ktERd5uUhu-EhFTozIsbBX85rxLdQZkOamevEP8Q9Skg.gTQW58msvH74VjlSxKlTNuFNOXomTXIvgU3RL4Xw-Ycg.JPEG/BTNCrownOfGreatRage.jpg?type=w740')
            .addFields(
                { name: `**진노의 화관**`, value: `> 습득처: `, inline: true },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**용의 눈**`, value: `> 습득처: ` },
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '극대노의 화관') {
            const embed = new EmbedBuilder()
            .setTitle(`극대노의 화관`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA4MThfOTYg/MDAxNTY2MDg5MDEyMzIw.YZJNAbvEWc2DL6BxwsWnUwbKglljzvgr20mF3h-4l3wg.bm1eIdfMXJTSgAXKcr6PHLR_4FbZwZIsDzaDuM2IkJYg.JPEG/BTNhat.jpg?type=w740')
            .addFields(
                { name: `**격노의 화관**`, value: `> 습득처: `, inline: true },
                { name: `**주시자의 눈**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '절대영도의 화관') {
            const embed = new EmbedBuilder()
            .setTitle(`절대영도의 화관`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTFfMzAg/MDAxNTg5MTI1MDM3MDc4.R5h5L4mEer0RAX6Zxhw35GGJIE1aGsfj5aXFG9cVn_sg.OH8H5Vuk8ZKeZcob_OQ_10P9nmgC5amhcygTopBarK8g.JPEG/BTNCrownOfAbsoluteZero.jpg?type=w740')
            .addFields(
                { name: `**냉정의 화관**`, value: `> 습득처: `, inline: true },
                { name: `**각인의 반지 네프티스**`, value: `> 습득처: ` },
                { name: `**다크 크리스탈**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
               
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '후드 오브 아포칼립스') {
            const embed = new EmbedBuilder()
            .setTitle(`후드 오브 아포칼립스`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTNfMTMx/MDAxNTcwOTE0MTE4MjI1.klyrJ6sdbGM5K11CuKRDQE2-XIZ9FhIQXE9EhkhQdBcg.w2Pq5SXiYjxssVsEETTkrHf7DEtH_wNvQVdiPGFYgQcg.JPEG/BTNinv_helm_robe_raidmage_i_01.jpg?type=w740')
            .addFields(
                { name: `**후드 오브 아포크리파**`, value: `> 습득처: `, inline: true },
                { name: `**주시자의 눈**`, value: `> 습득처: ` },
                { name: `**위장자의 인장**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
                { name: `**불타는 뼛조각**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
               
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '마신의 뿔') {
            const embed = new EmbedBuilder()
            .setTitle(`마신의 뿔`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MjhfMjkw/MDAxNTk4NTcyNDA5OTUw.BkcXJatXSn4Gikznw9SsjCfbn-LtjQol-HkvWuOJbUsg._ZRhz0IwTTVJlkHcxQ32GRRfyyEeALcGCT5rJpabs0Ig.JPEG/BTNItem_Helm018.jpg?type=w740')
            .addFields(
                { name: `**뇌신의 뿔**`, value: `> 습득처: `, inline: true },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
               
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '지혜의 원천 프로피티아') {
            const embed = new EmbedBuilder()
            .setTitle(`지혜의 원천 프로피티아`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MjhfMTQ2/MDAxNTk4NTczMTY4MDQ1.xG0FkflONBcq2YwszJbQVXUYtEmgNx5PVB8m5692Gqcg.Em6lM2FcfNA4K6zTMtJ-hzCs9EYMUrEzgrDmW50-v6og.JPEG/BTNItem_Helm019.jpg?type=w740')
            .addFields(
                { name: `**대마력의 원천 프로피티아**`, value: `> 습득처: `, inline: true },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '헤븐즈 피스트') {
            const embed = new EmbedBuilder()
            .setTitle(`헤븐즈 피스트`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA2MTFfMjI1/MDAxNjU0OTM1NjE0NDAz.3-MwijAGv07fegcJgeoedZfEdsfJgU_5oytVZMVapdAg.-4cJ0fgMR8wF8DqnIP_pGeSOVd_Kc27G78OKjl-8On0g.JPEG/HF.jpg?type=w740')
            .addFields(
                { name: `**퓨어 프로스트 건틀릿**`, value: `> 습득처: `, inline: true },
                { name: `**이프리트의 심장**`, value: `> 습득처: ` },
                { name: `**낡은 모래시계**`, value: `> 습득처: ` },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**용기의 맹세**`, value: `> 습득처: ` },
                
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '신풍의 반지') {
            const embed = new EmbedBuilder()
            .setTitle(`신풍의 반지`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MTFfNjEg/MDAxNTk3MTE4MDY2NjQ5.hCYFfvoG7GtNS6QaE3UdLdnMXRUcAXFuWOcWqZJ6bJQg.Dfc5yhmbUjr7etqfxv5BVbKBXQQH4wjN0PHZlLGPo4wg.JPEG/Ring.jpg?type=w740')
            .addFields(
                { name: `**시간의 반지**`, value: `> 습득처: `, inline: true },
                { name: `**폭풍의 반지**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '희망의 반지') {
            const embed = new EmbedBuilder()
            .setTitle(`희망의 반지`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTFfMjcy/MDAxNTg5MTMxNjg2NTgz.KUgkmvDXwYIStEwVGfnIAfNi34XT8SGJCcCZuU_Vc8Eg.0j6ghCLtwlRKIU8hyW5YhqajWRTEyxto6xbUHddjuesg.JPEG/BTNRingOfHope.jpg?type=w740')
            .addFields(
                { name: `**시간의 반지**`, value: `> 습득처: `, inline: true },
                { name: `**폭풍의 반지**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '절망의 반지') {
            const embed = new EmbedBuilder()
            .setTitle(`절망의 반지`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTFfNDIg/MDAxNTg5MTMyMjQwMzM2.2cWGdCFPB2gJEQei45rsO9-yAffOCu6v00wxPcsWWPYg.MYoeCs2FQEca3Sfqcis0UjfZE2k2lWWm6JEln0C-Upgg.JPEG/BTNRingOfDespair.jpg?type=w740')
            .addFields(
                { name: `**냉정의 반지**`, value: `> 습득처: `, inline: true },
                { name: `**흑의 마도서**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
               
                
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '운명의 반지') {
            const embed = new EmbedBuilder()
            .setTitle(`운명의 반지`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTNfMzAw/MDAxNTcwOTA2NDQzMDQz.vSNuyXAhTifjychy6EuSj-6i6jHDadXod5RdR2JJ5Mkg.E9F_xo1cgx3VIotlBnemVHony_iKJmjktEjyEDqpEAQg.JPEG/BTNRing.jpg?type=w740')
            .addFields(
                { name: `**시간의 반지**`, value: `> 습득처: `, inline: true },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
               
                
               
            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '광기의 반지') {
            const embed = new EmbedBuilder()
            .setTitle(`광기의 반지`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTNfMTkx/MDAxNTcwOTMwNjgzMTg3.7GN2OCrI2DneLKF2rD2b9aHJo130_9asg_s_uK5t7Ggg.iM2ITrjRdzyx6gBH93bHcST6T-0NuRMn1IJGBdhfJM0g.JPEG/BTNRing2.jpg?type=w740')
            .addFields(
                { name: `**일격의 반지**`, value: `> 습득처: `, inline: true },
                { name: `**파괴의 반지**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
               
                
               
            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '얼어붙은 영혼의 반지') {
            const embed = new EmbedBuilder()
            .setTitle(`얼어붙은 영혼의 반지`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA5MjNfMjY1/MDAxNjAwODM1MDk2NTM3.Ja7bjPqZI3HJkxoZ-6l2XvsxwvsrRUaova4-zZWOwNcg.btVfOxwkp5EzIV3vwpa_U52NutIV7sm-jZDgWj73Zywg.JPEG/BTN%EC%96%BC%EC%96%B4%EB%B6%99%EC%9D%80_%EC%98%81%ED%98%BC%EC%9D%98_%EB%B0%98%EC%A7%80.jpg?type=w740')
            .addFields(
                { name: `**시린 죽음의 반지**`, value: `> 습득처: `, inline: true },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },
                
               
            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '신의 뿔피리') {
            const embed = new EmbedBuilder()
            .setTitle(`신의 뿔피리`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MDNfMjM2/MDAxNTIyNzEzMjg4NjQ3.h04UhpC9TmggTyuihClL2UmtZv-wknOA9GxrgnZLsUAg.FVcV4ZR9vHhAv8_75FbIQay8NsT1Bl0joH0grWOSVoMg.JPEG.darkprank/BTNItem_Misc012.jpg?type=w740')
            .addFields(
                { name: `**혼돈의 파이프 아자토스**`, value: `> 습득처: `, inline: true },
                { name: `**바람의 조각**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**신의 금속**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                
               
            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '지배자의 반지 라테아') {
            const embed = new EmbedBuilder()
            .setTitle(`지배자의 반지 라테아`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODAzMjdfMjg5/MDAxNTIyMTEwOTI3OTQ2.heWwrbApBK-z_4KmpIXlxTVkDqPiEburf1pdVua4b0og.1VP_T55oNjyXMEgskJGxdPf41zFb_bPoo3s0zBjvS-gg.JPEG.darkprank/BTNinv_jewelry_ring_76.jpg?type=w740')
            .addFields(
                { name: `**혼돈의 반지 라테아**`, value: `> 습득처: `, inline: true },
                { name: `**파괴의 반지**`, value: `> 습득처: ` },
                { name: `**폭풍의 반지**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
                { name: `**정화의 증표**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '절대자의 반지') {
            const embed = new EmbedBuilder()
            .setTitle(`절대자의 반지`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTAxMDNfMjg0/MDAxNjA5NjUxNTAzODM5.4pnCM2SCnU3n__QSFoHE0e-ryr2ZQff7H7LZ5JAmcdIg.TAT1LCN06z0m0eujK3CxfIth8m1VLppiDPJ7UU8jPzMg.JPEG/BTNRingOfTheOne.jpg?type=w740')
            .addFields(
                { name: `**지배자의 반지 라테아**`, value: `> 습득처: `, inline: true },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '네뷸라 로즈') {
            const embed = new EmbedBuilder()
            .setTitle(`네뷸라 로즈`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMjZfMTcy/MDAxNTQ4NDgwNzg5NjQ0.ZGQX9pmraOPwbdSmHJ7jihlqR99i7wAFucpdAiXBjh4g.83_xM8-SY1hU1XGbpb4S2ffBXsP1uF3aMnzJ34v5udgg.PNG.darkprank/NebulaRose.png?type=w740')
            .addFields(
                { name: `**이터널 로즈**`, value: `> 습득처: `, inline: true },
                { name: `**폭풍의 반지**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**빛의 결정**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '데모닉 피스트') {
            const embed = new EmbedBuilder()
            .setTitle(`데모닉 피스트`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MjhfMTky/MDAxNTk4NTczOTI1Mjcx.vGXlzQuxvAmT-CsH3_4gt4ShxCJmdduB5KYjGqvpvnog.1YEk51u85y1xA7KTztFBRda-qPyB3vNLnURaAT7o3PQg.JPEG/BTNItem_Accessory028.jpg?type=w740')
            .addFields(
                { name: `**헤븐즈 피스트**`, value: `> 습득처: `, inline: true },
                { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '죄악의 증표') {
            const embed = new EmbedBuilder()
            .setTitle(`죄악의 증표`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMTAxMDNfMjAy/MDAxNjA5NjQ2MjM4NDIw.NgXxelu9quVTaIP6IghPROR-o0xoQZ2dUJPk89JY56Mg.HpdL52rIcaQFHIYV4D9-ldrRcZg_RWocrqFyQRGti3wg.JPEG/BTNMarkOfSin.jpg?type=w740')
            .addFields(
                { name: `**흑의 마도서**`, value: `> 습득처: `, inline: true },
                { name: `**위장자의 인장**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
              

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '악의 씨앗') {
            const embed = new EmbedBuilder()
            .setTitle(`악의 씨앗`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDEwMThfOTkg/MDAxNjAyOTk1MjQxNzg0.3ts9ouKRqe6SJfzHuXwoCFImVNAeRGuGP0fKbD_rVUgg.Rt22LhOcaEZZ-78bX3N4vr-2NZ48cty5SBCe-DtLsywg.PNG/Accessory.png?type=w740')
            .addFields(
                { name: `**죄악의 증표**`, value: `> 습득처: `, inline: true },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },
              

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '소생의 반지') {
            const embed = new EmbedBuilder()
            .setTitle(`소생의 반지`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODAzMTBfMjUz/MDAxNTIwNjE4MTkwNjcz.AuqI_K8-7FEPIyQHtdwg4N5fu12V7NKA9jUmWgVKtFsg.oManiQpm_-jugpbLJQQKGORvKnf6Y3XEvUcxvP0qsD4g.JPEG.darkprank/BTNItem_Accessory010.jpg?type=w740')
            .addFields(
                { name: `**트루블러드 링**`, value: `> 습득처: `, inline: true },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**집념의 장막**`, value: `> 습득처: ` },
                { name: `**마력의 정수**`, value: `> 습득처: ` },
                { name: `**타락의 포션**`, value: `> 습득처: ` },
              

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '화염 군주의 날개') {
            const embed = new EmbedBuilder()
            .setTitle(`화염 군주의 날개`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMjBfMjI4/MDAxNTcxNTA5OTgwNzgz.GrGpMsr-56OCPNEywdmCKaST38bDthjVtLkyWCDI124g.85k2lL9YV2-Qo9yF4a6KhJw5jhhwWfzP7pfXhk-yRuMg.JPEG/BTNFieryWIngs.jpg?type=w740')
            .addFields(
                { name: `**불사조의 날개**`, value: `> 습득처: `, inline: true },
                { name: `**드래고닉 오브**`, value: `> 습득처: ` },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**각인의 반지 네프티스**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '서리 군주의 날개') {
            const embed = new EmbedBuilder()
            .setTitle(`서리 군주의 날개`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDAyMThfMTg3/MDAxNTgxOTkzOTUyNDU1.nthDL7l2BoZksD_xrdpfO9auBb2f3lrbPDcB0GjJPUUg.N9tgyKpITquFLPcNZFLrll9zykgteiFidimbup2Ijk4g.JPEG/BTNFrostLordWing.jpg?type=w740')
            .addFields(
                { name: `**서리 요정의 날개**`, value: `> 습득처: `, inline: true },
                { name: `**드래고닉 오브**`, value: `> 습득처: ` },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '밤의 군주의 날개') {
            const embed = new EmbedBuilder()
            .setTitle(`밤의 군주의 날개`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA3MDZfMTc0/MDAxNTkzOTY4MzkxNjE5.vfCOK7ZQx1-4dMuxFgwyGKCMl6tGgnK4Ia3LqmtT3psg.qYSvJqq2wpK12xaSuELQfvnfBtFl4x72m8RQJ7OJAI8g.JPEG/BTNWings.jpg?type=w740')
            .addFields(
                { name: `**학살자의 날개**`, value: `> 습득처: `, inline: true },
                { name: `**피의 군주의 날개**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**군주의 징표**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '스톰') {
            const embed = new EmbedBuilder()
            .setTitle(`스톰`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MDRfNDQg/MDAxNTIyNzY5NTA5OTYw.qW1O9LMUb2bF_X_YWcECx5CfDHD6boPVa9Iwcemw1kUg.9FxqkKKEr5vAqu-a8w1n1upylLkUa5hLglG5FwybElEg.JPEG.darkprank/BTNWings07.jpg?type=w740')
            .addFields(
                { name: `**슬레이어 부츠**`, value: `> 습득처: `, inline: true },
                { name: `**폭풍의 반지**`, value: `> 습득처: ` },
                { name: `**빛의 결정**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '창공의 지배자') {
            const embed = new EmbedBuilder()
            .setTitle(`창공의 지배자`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTBfMTEg/MDAxNTg5MDg5MTU1MDMz.ygLCrF13ONZ2l9ELA0luMKlkZD_MU3ta81etEFyaxRMg.7JQfl6sN4PPRezcgcn2TtlzXw7VvxsVIx6ul-rUrAX0g.JPEG/BTNRulerOfTheSkies.jpg?type=w740')
            .addFields(
                { name: `**창공의 수호자**`, value: `> 습득처: `, inline: true },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**대자연의 정수**`, value: `> 습득처: ` },
                { name: `**혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '깊은 심연의 망토') {
            const embed = new EmbedBuilder()
            .setTitle(`깊은 심연의 망토`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MTFfMjE4/MDAxNTk3MTE2NTU5NDEy.j5iuVRf560cQIIf_du55YoRtajMfnpijM3r6Ibavdisg.E_9CXBWxrePGCZjDvZNeNdNpUNtzuCnMrvN7vU02nn0g.JPEG/BTNItem_Wings018.jpg?type=w740')
            .addFields(
                { name: `**타락한 그림자의 망토**`, value: `> 습득처: `, inline: true },
                { name: `**그림 하트**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**지옥의 파편**`, value: `> 습득처: ` },

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '대천사의 날개') {
            const embed = new EmbedBuilder()
            .setTitle(`대천사의 날개`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjVfNDcg/MDAxNTI0NTg3ODU5NDgw.0lpNgZj-ys2F6Sq0LjytOAgIACwhTAUpCGt0inflX6kg.PJS-hoZJT9VjFXMFzuG-Bs7-sTZimRC46wi0iizqg4Ig.JPEG.darkprank/BTNangelWings.jpg?type=w740')
            .addFields(
                { name: `**퓨어 크리스탈 윙**`, value: `> 습득처: `, inline: true },
                { name: `**창공의 수호자**`, value: `> 습득처: ` },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**불타는 뼛조각**`, value: `> 습득처: ` },
                { name: `**죽음의 창두 or 혼돈이 깃든 파편**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
               

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '요정의 가호') {
            const embed = new EmbedBuilder()
            .setTitle(`요정의 가호`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODAzMTBfMTY0/MDAxNTIwNjIyMDQxNTE1.b_9mJ0nrw0m9MdLBACLgPdfXQEQcGeEV6X95U05M3IAg.YuwfyS3BMCgPMuGgwvlJ48SRzjA2CAejHwzMIFdwEKQg.JPEG.darkprank/96803-d004cdaf7e1faa5ca83ff51a153d6fad.jpg?type=w740')
            .addFields(
                { name: `**대자연의 포옹**`, value: `> 습득처: `, inline: true },
                { name: `**망자의 영혼**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**정화의 증표**`, value: `> 습득처: ` },
                { name: `**죽음의 창두**`, value: `> 습득처: ` },
                

            );
        await interaction.editReply({
            embeds: [embed],


        }); 
        } else if (interaction.options.getString('아이템') == '브레이브 하트') {
            const embed = new EmbedBuilder()
            .setTitle(`브레이브 하트`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODAzMTBfMTY0/MDAxNTIwNjIyMDQxNTE1.b_9mJ0nrw0m9MdLBACLgPdfXQEQcGeEV6X95U05M3IAg.YuwfyS3BMCgPMuGgwvlJ48SRzjA2CAejHwzMIFdwEKQg.JPEG.darkprank/96803-d004cdaf7e1faa5ca83ff51a153d6fad.jpg?type=w740')
            .addFields(
                { name: `**그림 하트**`, value: `> 습득처: `, inline: true },
                { name: `**집념의 장막**`, value: `> 습득처: ` },
                { name: `**창공의 수호자**`, value: `> 습득처: ` },
                { name: `**폭풍의 가호**`, value: `> 습득처: ` },
                { name: `**화염의 가호**`, value: `> 습득처: ` },
                { name: `**바다의 가호**`, value: `> 습득처: ` },
                { name: `**빛나는 유적의 조각**`, value: `> 습득처: ` },
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '불멸자의 날개') {
            const embed = new EmbedBuilder()
            .setTitle(`불멸자의 날개`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MTFfODcg/MDAxNTk3MTE2OTYzNTUy.bSezchCR1GyTHmGAlevSu7N6Rq8vV4zcb_i4pU_dvskg.5FC9jK6xZHWSCG2ZOJwEbkgJCwJO7TSsfaYVWOBHz_Ig.JPEG/BTNItem_Wings019.jpg?type=w740')
            .addFields(
                { name: `**집념의 장막**`, value: `> 습득처: `, inline: true },
                { name: `**망자의 영혼**`, value: `> 습득처: ` },
                { name: `**하늘의 족쇄**`, value: `> 습득처: ` },
                { name: `**화산의 심장**`, value: `> 습득처: ` },
                { name: `**영원의 잔**`, value: `> 습득처: ` },
                { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        }  else if (interaction.options.getString('아이템') == '소울 디바우러') {
            const embed = new EmbedBuilder()
            .setTitle(`소울 디바우러`)
            .setColor('#57F287')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MTFfMjg0/MDAxNTk3MTE2NzQ5NTUy.sy0kfj1TjGNcrN-JxIlWUu9QMYzCydYbMDb96K2HcCIg.6CiyzRD8SQXRVPLxxcxx0mq0bG9iM7g6WRDDwyIC6U4g.JPEG/BTNItem_Wings020.jpg?type=w740')
            .addFields(
                { name: `**소울 이터**`, value: `> 습득처: `, inline: true },
                { name: `**탐욕의 저주**`, value: `> 습득처: ` },
                { name: `**안티 매터**`, value: `> 습득처: ` },
                { name: `**폭풍의 결정**`, value: `> 습득처: ` },
                { name: `**화염의 결정**`, value: `> 습득처: ` },
                { name: `**바다의 결정**`, value: `> 습득처: ` },
                { name: `**영혼의 파편**`, value: `> 습득처: ` },
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '핏빛 증오') {
            const embed = new EmbedBuilder()
            .setTitle(`핏빛 증오`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMjUw/MDAxNTAxNjIzMTY3ODU5.9dNCaI3yjM-CTUtyhNCv7y_mtOpJ0xjdY5XGIzrbdZ8g.qCsDUgu3tQ2zw-Y1otuK-G_XmBhVpev6IGxgZTSoGNUg.PNG.lbu_diablo/%ED%95%8F%EB%B9%9B%EC%A6%9D%EC%98%A4.png?type=w740')
            .addFields(
                { name: `**크림슨 펌킨 로드**`, value: `> 습득처: `, inline: true },
                { name: `**블러드 오브**`, value: `> 습득처: ` },
                { name: `**증오**`, value: `> 습득처: ` },
                { name: `**백작의 낡은 망토**`, value: `> 습득처: ` },
                { name: `**암흑의 날개 조각**`, value: `> 습득처: ` },
                { name: `**다크 크리스탈**`, value: `> 습득처: ` },
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '스태프 오브 어비스') {
            const embed = new EmbedBuilder()
            .setTitle(`스태프 오브 어비스`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMjUw/MDAxNTAxNjIzMTY3ODU5.9dNCaI3yjM-CTUtyhNCv7y_mtOpJ0xjdY5XGIzrbdZ8g.qCsDUgu3tQ2zw-Y1otuK-G_XmBhVpev6IGxgZTSoGNUg.PNG.lbu_diablo/%ED%95%8F%EB%B9%9B%EC%A6%9D%EC%98%A4.png?type=w740')
            .addFields(
                { name: `**스태프 오브 매드니스**`, value: `> 습득처: `, inline: true },
                { name: `**다크 매터**`, value: `> 습득처: ` },
                { name: `**분노의 결정**`, value: `> 습득처: ` },
                { name: `**심연의 기운**`, value: `> 습득처: ` },
                { name: `**다크 크리스탈**`, value: `> 습득처: ` },
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '지배자의 지팡이') {
            const embed = new EmbedBuilder()
            .setTitle(`지배자의 지팡이`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMjY5/MDAxNTAxNjIzMjMyNzIw.JGsZHDpetbcSA-QCtnJFKLPuakyMCZavPTqFDNtkNtsg.MuiVOCtn-pnDyOkUXz7n1MHMGOogBReFX3YabfoTuc8g.PNG.lbu_diablo/%EC%A7%80%EB%B0%B0%EC%9E%90%EC%9D%98%EC%A7%80%ED%8C%A1%EC%9D%B4.png?type=w740')
            .addFields(
                { name: `**대지의 기둥 벤지아나**`, value: `> 습득처: `, inline: true },
                { name: `**스태프 오브 매드니스**`, value: `> 습득처: ` },
                { name: `**심연의 눈**`, value: `> 습득처: ` },
                { name: `**분노의 결정**`, value: `> 습득처: ` },
                { name: `**불로의 심장**`, value: `> 습득처: ` },
                { name: `**대자연의 정수**`, value: `> 습득처: ` },
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '심장추적자') {
            const embed = new EmbedBuilder()
            .setTitle(`심장추적자`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfOTIg/MDAxNTAxNjIzMjQyMTEx.eXXP_R27xbioju7dHJEhN2I6YBLV1JLNOtS3_B0vxJgg.t4XFGcOfwQsSGRXI2hjE_66Q5f3eSNMZkfxUpy_DRlkg.PNG.lbu_diablo/%EC%8B%AC%EC%9E%A5%EC%B6%94%EC%A0%81%EC%9E%90.png?type=w740')
            .addFields(
                { name: `**추적자**`, value: `> 습득처: `, inline: true },
                { name: `**드래곤 하트**`, value: `> 습득처: ` },
                { name: `**매드 심볼**`, value: `> 습득처: ` },
                { name: `**영혼의 돌**`, value: `> 습득처: ` },
                { name: `**심연의 기운**`, value: `> 습득처: ` },
                { name: `**불로의 심장**`, value: `> 습득처: ` },
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '독의 환상검 라크트리샤') {
            const embed = new EmbedBuilder()
            .setTitle(`독의 환상검 라크트리샤`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfNzgg/MDAxNTAxNjIzMjU2MTE2.O2jirnjYMFLYCf99QPmSf00SeSy7GV2Nk7C4H_f-2qEg.tOgxvrpo7UKNbhtreiQHe5LhxyguCcUfv6mQKoSzB6Ug.JPEG.lbu_diablo/%EB%8F%85%EC%9D%98%ED%99%98%EC%83%81%EA%B2%80%EB%9D%BC%ED%81%AC%ED%8A%B8%EB%A6%AC%EC%83%A4.jpg?type=w740')
            .addFields(
                { name: `**독의 고대검 라크샤**`, value: `> 습득처: `, inline: true },
                { name: `**생명의 돌**`, value: `> 습득처: ` },
                { name: `**복수자**`, value: `> 습득처: ` },
                { name: `**타락의 결정**`, value: `> 습득처: ` },
                { name: `**망각의 구슬**`, value: `> 습득처: ` },
                { name: `**대자연의 정수**`, value: `> 습득처: ` },
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '에버프로스트 베인') {
            const embed = new EmbedBuilder()
            .setTitle(`독의 환상검 라크트리샤`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfNzgg/MDAxNTAxNjIzMjU2MTE2.O2jirnjYMFLYCf99QPmSf00SeSy7GV2Nk7C4H_f-2qEg.tOgxvrpo7UKNbhtreiQHe5LhxyguCcUfv6mQKoSzB6Ug.JPEG.lbu_diablo/%EB%8F%85%EC%9D%98%ED%99%98%EC%83%81%EA%B2%80%EB%9D%BC%ED%81%AC%ED%8A%B8%EB%A6%AC%EC%83%A4.jpg?type=w740')
            .addFields(
                { name: `**진혼궁**`, value: `> 습득처: `, inline: true },
                { name: `**아이시클 스톰**`, value: `> 습득처: ` },
                { name: `**프로스트 베인**`, value: `> 습득처: ` },
                { name: `**망각의 구슬 or 망각의 파편**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '소울스토커') {
            const embed = new EmbedBuilder()
            .setTitle(`소울스토커`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMjUx/MDAxNTAxNjIzMjg0MDg5.2hsTL56miLUrpc7QX08bcrEicBkwyn7IVfMP8YpUeiEg._b1IYHVxfU4XagYOiarNYvCUs4CRGWN1jmjtbKp-8lsg.JPEG.lbu_diablo/%EC%86%8C%EC%9A%B8%EC%8A%A4%ED%86%A0%EC%BB%A4.JPG?type=w740')
            .addFields(
                { name: `**추적자**`, value: `> 습득처: `, inline: true },
                { name: `**얼음 거미줄**`, value: `> 습득처: ` },
                { name: `**영혼의 돌**`, value: `> 습득처: ` },
                { name: `**악몽의 기운**`, value: `> 습득처: ` },
                { name: `**망각의 구슬 or 스켈레톤 본**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
                
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '천영의 환검 미크로네이서') {
            const embed = new EmbedBuilder()
            .setTitle(`천영의 환검 미크로네이서`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfNDYg/MDAxNTAxNjIzMzAwOTE5.f6Yl1NsFV9cUc74I6khSGqRfxmCtnv9K8L4NwkmslJMg.V1xbLO4oLI3VpW3aNbPLq3NTTMKf4zwRzFxcREVZ5bMg.PNG.lbu_diablo/%EC%B2%9C%EC%98%81%EC%9D%98%ED%99%98%EA%B2%80%EB%AF%B8%ED%81%AC%EB%A1%9C%EB%84%A4%EC%9D%B4%EC%84%9C.png?type=w740')
            .addFields(
                { name: `**진 환검 바하나르**`, value: `> 습득처: `, inline: true },
                { name: `**아다만티움**`, value: `> 습득처: ` },
                { name: `**악몽의 기운**`, value: `> 습득처: ` },
                { name: `**순수의 강철**`, value: `> 습득처: ` },
                { name: `**대자연의 정수**`, value: `> 습득처: ` },
                { name: `**한기의 조각**`, value: `> 습득처: ` },
                
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '번개의 창 티베리우스') {
            const embed = new EmbedBuilder()
            .setTitle(`번개의 창 티베리우스`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA5MDlfNDQg/MDAxNTY3OTk2OTY3MzU1._lRrbP6EIjKwql-qoBRznDdRx3SJK6IyW9S6KhZdiB0g.PXsdzBpksIlOirqRgGNyHAyQOSeIDplCfBrWlQ5JPEcg.JPEG/%EB%B2%88%EA%B0%9C%EC%9D%98%EC%B0%BD%ED%8B%B0%EB%B2%A0%EB%A6%AC%EC%9A%B0%EC%8A%A4resized.jpg?type=w740')
            .addFields(
                { name: `**피의 진혼창 상귀엘**`, value: `> 습득처: `, inline: true },
                { name: `**신의 금속**`, value: `> 습득처: ` },
                { name: `**정화의 증표**`, value: `> 습득처: ` },
                { name: `**바람의 조각**`, value: `> 습득처: ` },
                { name: `**폭풍의 문장**`, value: `> 습득처: ` },
               
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '빛의 검 오케아노스'){
            const embed = new EmbedBuilder()
            .setTitle(`빛의 검 오케아노스`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA5MDlfMjUw/MDAxNTY3OTk3MDc1MDU5.4nBc8BBBB4riL2wVerR0pDXfxSqbEOnMKpBqELzO42Ag.KuW_VrUEmIgBtIqJr13TX3mnJnMRftQcYOCPG9tRLKcg.JPEG/%EB%B9%9B%EC%9D%98%EA%B2%80%EC%98%A4%EC%BC%80%EC%95%84%EB%85%B8%EC%8A%A4resized.jpg?type=w740')
            .addFields(
                { name: `**수호의 검 그리세우스**`, value: `> 습득처: `, inline: true },
                { name: `**봉인된 대천사의 날개**`, value: `> 습득처: ` },
                { name: `**순수의 강철**`, value: `> 습득처: ` },
                { name: `**정화의 증표**`, value: `> 습득처: ` },
                { name: `**빛의 결정**`, value: `> 습득처: ` },
               
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '헬 라이서') {
            const embed = new EmbedBuilder()
            .setTitle(`헬 라이서`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfNjgg/MDAxNTAxNjIzMzMzNTU1.gVapWgAkQTbTrDcJwjkBvXjIlDnH8f8ownqHOhh8zx8g.DsLdpWlyW3C97rihPBJ9vLd65GgB3ykwY1p_mx--zncg.PNG.lbu_diablo/%ED%97%AC%EB%9D%BC%EC%9D%B4%EC%84%9C.png?type=w740')
            .addFields(
                { name: `**영혼의 지팡이**`, value: `> 습득처: `, inline: true },
                { name: `**타락의 결정**`, value: `> 습득처: ` },
                { name: `**분노의 결정**`, value: `> 습득처: ` },
                { name: `**다크 크리스탈**`, value: `> 습득처: ` },
                { name: `**위서의 한 페이지**`, value: `> 습득처: ` },
               
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') == '크림슨 리퍼') {
            const embed = new EmbedBuilder()
            .setTitle(`크림슨 리퍼`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMTQy/MDAxNTAxNjIzMzU2ODg4.ln5M6l3kQPVLtIPj0LfLHtcZw48UYJSx0gb7wXfv4Vwg.8juyJk8JusA8n9nR_E3U0r-m23GuZRr-AQQbVJRQo0Mg.JPEG.lbu_diablo/%ED%81%AC%EB%A6%BC%EC%8A%A8%EB%A6%AC%ED%8D%BC.jpg?type=w740')
            .addFields(
                { name: `**스톰 리버**`, value: `> 습득처: `, inline: true },
                { name: `**혈혼검 테페시아**`, value: `> 습득처: ` },
                { name: `**작은 분노의 조각**`, value: `> 습득처: ` },
                { name: `**심연의 기운**`, value: `> 습득처: ` },
                { name: `**불로의 심장**`, value: `> 습득처: ` },
                { name: `**암흑의 결정**`, value: `> 습득처: ` },
               
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') === '블레이징 하트') {
            const embed = new EmbedBuilder()
            .setTitle(`블레이징 하트`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMjIx/MDAxNTAxNjc2MjY4ODQ0.VmUmUbhZB1dwpRIcD1tVtAcvAHEOJkBMfFfVsWKypXEg.E9wzbF8_zhv8cCIBSptjHNDArjSeHXcHbiKrY1Qi-hAg.PNG.lbu_diablo/%EB%B8%94%EB%A0%88%EC%9D%B4%EC%A7%95%ED%95%98%ED%8A%B8.png?type=w740')
            .addFields(
                { name: `**블레이징 소울**`, value: `> 습득처: `, inline: true },
                { name: `**용기의 맹세**`, value: `> 습득처: ` },
                { name: `**집념의 장막**`, value: `> 습득처: ` },
                { name: `**신의 금속**`, value: `> 습득처: ` },
               
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        } else if (interaction.options.getString('아이템') === '크림슨 스타') {
            const embed = new EmbedBuilder()
            .setTitle(`크림슨 스타`)
            .setColor('#992D22')
            .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMTky/MDAxNTAxNjIzNDM3MzI5.Eekigc-miJHhzxola8vjy4As73CRGtZ3m-hWb0O_eTAg.YmkFBMIZrnU52TR5PU2dSmRvoqgxNI9UUQQz6ZNmjsAg.PNG.lbu_diablo/%ED%81%AC%EB%A6%BC%EC%8A%A8%EC%8A%A4%ED%83%80.PNG?type=w740')
            .addFields(
                { name: `**크림슨 크로스**`, value: `> 습득처: `, inline: true },
                { name: `**트루 블러드 링**`, value: `> 습득처: ` },
                { name: `**미스릴**`, value: `> 습득처: ` },
                { name: `**순수의 강철**`, value: `> 습득처: ` },
                { name: `**심연의 기운**`, value: `> 습득처: ` },
               
                
                

            );
        await interaction.editReply({
            embeds: [embed],


        });
        }
         
        
        else {
           
            const embed = new EmbedBuilder()
            .setTitle(`오류 : 아이템 정보를 불러오지 못했습니다.`)
            .setDescription('문구오류/없는아이템')
            await interaction.editReply({
                embeds : [embed],
            })
        }

    },
}
