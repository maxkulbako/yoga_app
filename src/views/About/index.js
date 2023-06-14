import { BaseButton } from '../components/Buttons/BaseButton';

import './about.scss';

export function About() {
  return (
    <div className="about_contant_wrapper">
      <div className="img_wrapper">
        <img
          alt="ava_img"
          src="https://res.cloudinary.com/dd69ztxsd/image/upload/v1680197635/nana_yoga/ava_nana-min_1_noy1mn_bkqhqh.jpg"
        />
      </div>
      <div className="text_section_wrapper">
        <div className="text_block">
          <p>
            я Нана и я сердечно рада, что вы здесь оказались. ведь это значит,
            что ваша душа стремиться к познанию своей изначальной сути.
          </p>
          <p>
            Оставьте все ненужное за пределами коврика, это время только для
            себя. Позвольте йоге войти в Вашу жизнь и вести Вас.
          </p>
          <p>
            бережно и с любовью я передаю знания о йоге тем, кто ступил на
            главный путь жизни - путь к себе. важно помнить, что эта наука
            доступна абсолютно всем, кто готов ее принять.
          </p>
          <p>
            мое путешествие к себе началось в 2020 году, тогда я стала
            выстраивать совершенно новые отношения со своим телом. занимаясь
            танцами всю свою жизнь, я уже была осведомлена о том, что различные
            телесные практики имеют прямое влияние на состояние, но никогда не
            копала глубже. а затем случилась магия.
          </p>
          <p>
            что-то незримое, но очень сильное, начало притягивать меня на коврик
            ежедневно и я с закрытыми глазами делала то, что приходило изнутри.
            у меня был один единственный учитель - внутренний, я училась ему
            следовать, отпускать контроль и наблюдать. этот опыт порой сложно
            облечь в слова, но он открыт каждому. каждому, кто готов довериться.
          </p>
          <p>
            все мы приходим к йоге по разным причинам и это нормально. кто-то
            стремиться обрести здоровье, кто-то душевный покой. самое важное,
            чтобы вы продолжали идти не просто дальше, но и глубже и с каждой
            практикой осознавали, что <b>ЙОГА - это внутренняя работа</b>, она
            выходит за пределы физических положений тела, она{' '}
            <b>обнимает все аспекты нашей жизни</b>, она{' '}
            <b>начинается за пределами коврика. </b>
          </p>
          <p>
            для меня йога - это то, как я смотрю на жизнь, как мне ее
            «показывают». удивительная возможность на собственном эмпирическом
            опыте исследовать «кто я», как здесь все устроено и «куда я иду».
            большая ценность, что на опыте, а не только читая теорию и
            накапливая сухую информацию.
          </p>
          <p>
            для меня йога - это обуздание ума и перепрошивка неполезных для меня
            привычек.
          </p>
          <p>это что-то, что в процессе двигает тобою.</p>
          <p>это соединение. с собой и со всем, ощущение целостности.</p>
          <p>
            мне очень хочется, чтобы люди становились более осознанными и
            вспомнили свою главную цель, свою миссию здесь. и я делюсь всем тем,
            чем делюсь, просто потому что не могу этого не делать.{' '}
          </p>
          <p>
            каждый находит «своего» человека, который поможет узнать об этом
            сакральном знании больше. человека, который проведет вас к вам же. я
            сама практикую каждый день и каждый день учусь. всем тем, что уже
            утвердилось в моей личной практике и тем, что я внедрила в свою
            жизнь - я делюсь. и безгранично благоДарю всем, кто доверяет и
            выбирает принять эти знания через меня.
          </p>
          <p>
            для кого важны сертификаты и дипломы: я завершила преподавательский
            курс, который соединил в себе лекции и практические занятия об
            асанах, пранаямах, шаткармах, чакральной системе, анатомии,
            бандахах, мудрах и ведических писаниях. сдала успешно экзамены и
            имею сертификат международного альянса йоги (yoga alliance
            international).
          </p>
          <p>
            не взирая на то, как и где вы практикуете, желаю вам продолжать этот
            непростой, но важный путь. и помните:{' '}
            <b>сначала вы делаете йогу, затем йога делает вас. </b>
          </p>
          <p>ом.</p>
        </div>
        <div className="action_button">
          <BaseButton title="практиковать" />
        </div>
      </div>
    </div>
  );
}
