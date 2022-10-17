const { SlashCommandBuilder,ComponentType,EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('검색')
    .setDescription('아이템을 검색합니다.')
    .addStringOption(option => option.setName('아이템')
        .setDescription('모든 아이템을 검색합니다.')
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
                "황폐한 영혼의 반지", "영원의 반지", "생명의 심장", "끝없는 갈망의 망토", "블러드 스톰", "수호천사",
                "신성한 기원의 날개", "창조의 날개","파괴의 반지",
            ];
        const filtered = choices.filter((choice) =>
            choice.startsWith(focusedValue)
        );
        await interaction.respond(
            filtered.map((choice) => ({ name: choice, value: choice }))
        )

            },
async execute(interaction, client) {
    ephbool = interaction.options.getBoolean('타인표시')


    if (ephbool === true) {
        ephbool = false;
    } else {
        ephbool = true;
    }
    await interaction.deferReply({

        ephemeral: ephbool
    });
    if (interaction.options.getString('아이템') == '파괴의 반지') {
        const embed = new EmbedBuilder()
                .setTitle(`파괴의 반지`)
                .setColor('#9B59B6')
                .setThumbnail('https://raw.githubusercontent.com/sfarmani/twicons/master/Ring%20of%20Destruction.jpg')
                .addFields(
                    { name: `**디 엔더**`, value: `> 습득처: 데스 핀드`, inline: true },
                    { name: `**파괴의 반지**`, value: `> 습득처: 데스 핀드` },
                    { name: `**화신의 심장**`, value: `> 습득처: 화신 이프리트` },
                    { name: `**핏빛 장미** or **희생의 문장**`, value: `> 습득처: 공작 라자루스` },
                    { name: `**폭풍의 결정**`, value: `> 습득처: 뇌신 발토라` },
                    { name: `**영혼의 파편**`, value: `> 습득처: 지하 군주 아가레스` },
                    { name: `**피의 결정** or **영혼의 꽃**`, value: `> 습득처: 공작 라자루스` },
                );
             
                    
            
              
              
               
                const row = new ActionRowBuilder().addComponents(
                    new SelectMenuBuilder()
                        .setCustomId('select')
                        .setPlaceholder('시세를 보고싶은 아이템을 선택하세요.')
                        .addOptions(new SelectMenuOptionBuilder({
                            label: `베리엘의 힘`,
                            value: `power_of`,
                        }),
                        new SelectMenuOptionBuilder({
                            label: `Option #2`,
                            value: `https://patreon.com/fusionterror`,
                        })),
                );

            const msg = await interaction.editReply({
                embeds :[embed],
                components :[row],
            })
            const col = msg.createMessageComponentCollector({
                filter: i => i.user.id === interaction.user.id
            });
             col.on('ignore', (i) => i.reply({
                ephemeral: true,
                embeds :[new EmbedBuilder({
                    title: "You are not allowed"
                }).setColor("Red")]
            })); 
    } 

    
},
};