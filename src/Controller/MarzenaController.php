<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MarzenaController extends AbstractController
{

    #[Route('/')]
    public function indexNoLocale(): Response
    {
        return $this->redirectToRoute('app_homepage', ['_locale' => 'en']);
    }

    #[Route('/{_locale<%app.supported_locales%>}', name: 'app_homepage')]
    public function index(): Response
    {
        return $this->render('homepage.html.twig', [
            'controller_name' => 'MarzenaController',
        ]);
    }
}
