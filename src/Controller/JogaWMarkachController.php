<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


class JogaWMarkachController extends AbstractController
{
    #[Route('/', name: 'app_jogawmarkach_homepage')]
    public function homepage(): Response {
        return $this->render('hp.html.twig');
    }

    #[Route('/regulamin', name: 'app_jogawmarkach_regulamin')]
    public function regulamin(): Response {
        return $this->render('regulamin.html.twig');
    }

    #[Route('/polityka-prywatnosci', name: 'app_jogawmarkach_polityka_prywatnosci')]
    public function politpryw(): Response {
        return $this->render('polityka_prywatnosci.html.twig');
    }
}