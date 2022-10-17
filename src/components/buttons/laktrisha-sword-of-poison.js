const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `laktrisha_sword_of_poison`
    },
    async execute(interaction, client){
        const embed = new EmbedBuilder()
    .setTitle(`독의 환상검 라크트리샤`)
    .setColor(1752220)
    .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfNzgg/MDAxNTAxNjIzMjU2MTE2.O2jirnjYMFLYCf99QPmSf00SeSy7GV2Nk7C4H_f-2qEg.tOgxvrpo7UKNbhtreiQHe5LhxyguCcUfv6mQKoSzB6Ug.JPEG.lbu_diablo/%EB%8F%85%EC%9D%98%ED%99%98%EC%83%81%EA%B2%80%EB%9D%BC%ED%81%AC%ED%8A%B8%EB%A6%AC%EC%83%A4.jpg?type=w740')
    .addFields([
        {
            name: `조합법`,
            value: `\n\n독의 고대검 라크샤 \n 복수자 \n 생명의 돌 \n 대자연의 정수 \n 타락의 결정 \n 망각의 구슬`,
            inline: true
        }
    ]);
    const button = new ButtonBuilder()
    .setCustomId('atricia_the_sword_of_dreams')
    .setLabel(`몽환의 검 아트리샤`)
    .setStyle(ButtonStyle.Primary);
    await interaction.update({
        embeds: [embed],
        components: [new ActionRowBuilder().addComponents(button)],
        ephemeral: true
        
    });
    }
}