import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Ear" className="text-primary" size={32} />
              <span className="text-xl font-bold text-primary">СлухЦентр</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium transition-colors hover:text-primary">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium transition-colors hover:text-primary">
                Каталог
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium transition-colors hover:text-primary">
                О нас
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium transition-colors hover:text-primary">
                Услуги
              </button>
              <button onClick={() => scrollToSection('articles')} className="text-sm font-medium transition-colors hover:text-primary">
                Статьи
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium transition-colors hover:text-primary">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('appointment')}>Записаться</Button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-4 animate-fade-in">
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollToSection('hero')} className="text-left py-2 text-sm font-medium transition-colors hover:text-primary">
                  Главная
                </button>
                <button onClick={() => scrollToSection('catalog')} className="text-left py-2 text-sm font-medium transition-colors hover:text-primary">
                  Каталог
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-sm font-medium transition-colors hover:text-primary">
                  О нас
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 text-sm font-medium transition-colors hover:text-primary">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('articles')} className="text-left py-2 text-sm font-medium transition-colors hover:text-primary">
                  Статьи
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-sm font-medium transition-colors hover:text-primary">
                  Контакты
                </button>
                <Button onClick={() => scrollToSection('appointment')} className="w-full">Записаться</Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Верните радость слышать мир
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Современные слуховые аппараты от ведущих производителей. Профессиональная консультация и настройка.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={() => scrollToSection('appointment')} className="text-lg">
                    Записаться на приём
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('catalog')}>
                    Посмотреть каталог
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/5d836411-c74f-4ee7-bba7-27837b8c289f/files/c2cf9206-9d28-40cf-b22d-87255d19c787.jpg"
                  alt="Счастливый человек со слуховым аппаратом"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Award" className="mx-auto text-primary mb-4" size={48} />
                  <h3 className="font-bold text-xl mb-2">15+ лет опыта</h3>
                  <p className="text-muted-foreground">Работаем с 2008 года</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Users" className="mx-auto text-primary mb-4" size={48} />
                  <h3 className="font-bold text-xl mb-2">5000+ клиентов</h3>
                  <p className="text-muted-foreground">Доверяют нам свой слух</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="HeartHandshake" className="mx-auto text-primary mb-4" size={48} />
                  <h3 className="font-bold text-xl mb-2">Гарантия качества</h3>
                  <p className="text-muted-foreground">Официальная гарантия</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Clock" className="mx-auto text-primary mb-4" size={48} />
                  <h3 className="font-bold text-xl mb-2">Быстрая настройка</h3>
                  <p className="text-muted-foreground">За одно посещение</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные модели</h2>
              <p className="text-lg text-muted-foreground">Современные слуховые аппараты для любого типа потери слуха</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-muted">
                    <img 
                      src="https://cdn.poehali.dev/projects/5d836411-c74f-4ee7-bba7-27837b8c289f/files/65eb4d59-0fac-4d7e-8642-1521f0959481.jpg"
                      alt="Слуховой аппарат Premium"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle>Premium Digital</CardTitle>
                  <CardDescription>Премиальная модель с шумоподавлением</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">Беспроводная зарядка</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">Bluetooth подключение</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">32 канала обработки</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">от 89 000 ₽</span>
                    <Button onClick={() => scrollToSection('appointment')}>Подробнее</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-primary/50">
                <CardHeader>
                  <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-muted">
                    <img 
                      src="https://cdn.poehali.dev/projects/5d836411-c74f-4ee7-bba7-27837b8c289f/files/65eb4d59-0fac-4d7e-8642-1521f0959481.jpg"
                      alt="Слуховой аппарат Smart"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Хит продаж
                    </div>
                  </div>
                  <CardTitle>Smart Comfort</CardTitle>
                  <CardDescription>Оптимальный баланс цены и качества</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">Цифровая обработка звука</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">16 каналов настройки</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">Влагозащита IP67</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">от 49 000 ₽</span>
                    <Button onClick={() => scrollToSection('appointment')}>Подробнее</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-muted">
                    <img 
                      src="https://cdn.poehali.dev/projects/5d836411-c74f-4ee7-bba7-27837b8c289f/files/65eb4d59-0fac-4d7e-8642-1521f0959481.jpg"
                      alt="Слуховой аппарат Classic"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle>Classic Essential</CardTitle>
                  <CardDescription>Доступная и надёжная модель</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">Простое управление</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">8 каналов настройки</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span className="text-sm">Длительная работа батареи</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">от 29 000 ₽</span>
                    <Button onClick={() => scrollToSection('appointment')}>Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/5d836411-c74f-4ee7-bba7-27837b8c289f/files/7fdf4d6a-2c88-4eb5-803f-a523c9b9a9fc.jpg"
                  alt="Специалист центра"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашем центре</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  СлухЦентр работает с 2008 года и является одним из ведущих центров по подбору и настройке слуховых аппаратов в России.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Наши специалисты имеют многолетний опыт работы и регулярно проходят обучение у производителей слуховых аппаратов. Мы используем современное диагностическое оборудование и работаем только с официальными поставщиками.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Shield" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Сертифицированные специалисты</h3>
                      <p className="text-muted-foreground">Все наши врачи имеют профильное медицинское образование</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="FileCheck" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Официальная гарантия</h3>
                      <p className="text-muted-foreground">На все аппараты предоставляется гарантия производителя</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Headphones" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Пожизненная поддержка</h3>
                      <p className="text-muted-foreground">Бесплатная настройка и консультации на весь срок использования</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground">Полный спектр услуг по диагностике и коррекции слуха</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Stethoscope" className="text-primary mb-2" size={32} />
                  <CardTitle>Диагностика слуха</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Комплексная проверка слуха на современном оборудовании. Аудиометрия, тимпанометрия, ОАЭ.
                  </p>
                  <p className="font-semibold text-primary">Бесплатно при покупке аппарата</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Settings" className="text-primary mb-2" size={32} />
                  <CardTitle>Подбор и настройка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Индивидуальный подбор слухового аппарата с учётом степени потери слуха и образа жизни.
                  </p>
                  <p className="font-semibold text-primary">Настройка за 1 визит</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Wrench" className="text-primary mb-2" size={32} />
                  <CardTitle>Ремонт и обслуживание</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ремонт слуховых аппаратов любой сложности. Замена комплектующих, чистка, профилактика.
                  </p>
                  <p className="font-semibold text-primary">От 1 дня</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Home" className="text-primary mb-2" size={32} />
                  <CardTitle>Выезд на дом</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Консультация и настройка слухового аппарата на дому для лежачих больных и пожилых людей.
                  </p>
                  <p className="font-semibold text-primary">По Москве и области</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="TestTube" className="text-primary mb-2" size={32} />
                  <CardTitle>Тест-драйв аппарата</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Возможность протестировать слуховой аппарат в течение 14 дней перед покупкой.
                  </p>
                  <p className="font-semibold text-primary">14 дней бесплатно</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="GraduationCap" className="text-primary mb-2" size={32} />
                  <CardTitle>Обучение использованию</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Подробная инструкция по использованию, уходу и настройке вашего слухового аппарата.
                  </p>
                  <p className="font-semibold text-primary">Бесплатно</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="appointment" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Запишитесь на консультацию</h2>
                <p className="text-lg text-muted-foreground">
                  Оставьте заявку, и наш специалист свяжется с вами для записи на удобное время
                </p>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input 
                        id="name" 
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Комментарий (необязательно)</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Опишите вашу ситуацию или задайте вопрос"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="articles" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Полезные статьи</h2>
              <p className="text-lg text-muted-foreground">Узнайте больше о здоровье слуха</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">Как выбрать слуховой аппарат</CardTitle>
                  <CardDescription>5 минут чтения</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Подробное руководство по выбору подходящего слухового аппарата с учётом ваших потребностей и бюджета.
                  </p>
                  <Button variant="link" className="p-0">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">Признаки снижения слуха</CardTitle>
                  <CardDescription>3 минуты чтения</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ранние признаки потери слуха, на которые стоит обратить внимание. Когда нужно обратиться к специалисту.
                  </p>
                  <Button variant="link" className="p-0">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">Уход за слуховым аппаратом</CardTitle>
                  <CardDescription>4 минуты чтения</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Правила ухода и обслуживания слухового аппарата для длительной и надёжной работы устройства.
                  </p>
                  <Button variant="link" className="p-0">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">Мы всегда рады вам помочь</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="MapPin" className="mx-auto text-primary mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Примерная, д. 123
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Phone" className="mx-auto text-primary mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 (495) 123-45-67
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Clock" className="mx-auto text-primary mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 20:00<br/>
                    Сб-Вс: 10:00 - 18:00
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary/5 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Ear" className="text-primary" size={28} />
                <span className="text-lg font-bold">СлухЦентр</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные решения для вашего слуха с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('articles')} className="hover:text-primary transition-colors">Статьи</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@sluhcentr.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 СлухЦентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
