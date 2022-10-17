const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder, messageLink } = require('discord.js');

module.exports = {
    data: {
        name: `sub-menu2`
    },
    async execute(interaction,message ,client) {
        const selectedValue = interaction.values[0];
        const embed = new EmbedBuilder()
        .setTitle(`천지개벽`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MDNfMjA1/MDAxNTIyNzU4ODYyMjI3.mRNnpJf1DJVfVK2kuk-juvQQfP_rMfsXfFgoGjr7958g.geYjvfZzOvoS7JiVHI0wMot8CL41Xmm-mRoples0W1Yg.JPEG.darkprank/BTNSpear06.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n천류의 창 아글라이아 \n 번개의 창 티베리우스 \n 폭풍의 가호 \n 죽음의 창두 \n 안티 매터 \n 빛나는 유적의 조각`,
                inline: true
            }
        ]);
        
       if (selectedValue === "sub-menu2") {
            await interaction.reply({
                embeds: [embed],
                
            });

        }
    },
};